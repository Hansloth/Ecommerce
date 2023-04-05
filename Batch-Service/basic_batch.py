import os
from dotenv import load_dotenv
from pymongo import MongoClient

def get_database(dbname = "INVENTORY"):
    # Load .env file and extract inventory uri
    load_dotenv()
    CONN_STRING = os.getenv('MONGO_URI')
    
    # Create connection to mongodb
    client = MongoClient(CONN_STRING)
    # Return name of database we want to connect to, then use [collection_name] to enter a collection
    return client[dbname]

if __name__ == "__main__":
    # Connect to customer and inventory db
    customer_db_conn = get_database("CUSTOMER-INFORMATION")["orders"]

    # Check if anything in orders hasn't been batched, if yes then process it, if no then exit
    if(customer_db_conn.count_documents({"batched":False}) > 0):
        inv_db_conn = get_database()

        # Find all orders that are not yet batched
        batch_list = customer_db_conn.find({"batched":False})

        for order in batch_list:
            # Update actualinventory for each item found
            for item in order['items']:
                new_qty = int(inv_db_conn["actualitems"].find_one({"id":item["id"]})["invQty"]) - int(item["qty"])
                inv_db_conn["actualitems"].update_one({"id":item["id"]}, {"$set": {"invQty":new_qty}})
            # Update batch status for this order
            customer_db_conn.update_one({"_id": order["_id"]}, {"$set": {"batched":True}})

        # Update db that is customer facing
        for item in inv_db_conn["actualitems"].find():
            inv_db_conn["items"].update_one({"id":item["id"]}, {"$set": {"invQty":item["invQty"]}})

    # TODO EXTRA : If updating actualitems would result in negative then cancel customer order and set a flag for review
    # If actualitems and items has a discrepency then flag for review
    # I don't think these are required for this lab, but they were though of