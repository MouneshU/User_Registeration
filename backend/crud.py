from database import get_connection
from models import User

import logging

def create_user(user: User):
    conn = get_connection()
    cursor = conn.cursor()
    sql = "INSERT INTO Registration (Name, Email, DateOfBirth) VALUES (%s, %s, %s)"
    try:
        cursor.execute(sql, (user.name, user.email, user.dob))
        conn.commit()
    except mysql.connector.Error as err:
        logging.error(f"Database error: {err}")
        raise HTTPException(status_code=500, detail=f"Database error: {err}")
    except Exception as e:
        logging.error(f"Unexpected error: {e}")
        raise HTTPException(status_code=500, detail=f"Unexpected error: {e}")
    finally:
        cursor.close()
        conn.close()



def get_all_users():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Registration")
    users = cursor.fetchall()
    conn.close()
    return users

def update_user(user_id: int, user: User):
    conn = get_connection()
    cursor = conn.cursor()
    sql = "UPDATE Registration SET Name=%s, Email=%s, DateOfBirth=%s WHERE ID=%s"
    cursor.execute(sql, (user.name, user.email, user.dob, user_id))
    conn.commit()
    conn.close()

def delete_user(user_id: int):
    conn = get_connection()
    cursor = conn.cursor()
    sql = "DELETE FROM Registration WHERE ID=%s"
    cursor.execute(sql, (user_id,))
    conn.commit()
    conn.close()


    try:
        cursor.execute(sql, (user.name, user.email, user.dob))
        conn.commit()
    except Exception as e:
        print("DB Error:", e)
        raise e
