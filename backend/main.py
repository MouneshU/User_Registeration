from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import User
import crud

app = FastAPI()

# Allow all CORS (for frontend access)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/register")
def register(user: User):
    print("Received data:", user)
    try:
        crud.create_user(user)
        return {"message": "User registered successfully"}
    except Exception as e:
        print("Error:", e)
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/users")
def get_users():
    return crud.get_all_users()

@app.put("/update/{user_id}")
def update(user_id: int, user: User):
    crud.update_user(user_id, user)
    return {"message": "User updated"}

@app.delete("/delete/{user_id}")
def delete(user_id: int):
    crud.delete_user(user_id)
    return {"message": "User deleted"}
