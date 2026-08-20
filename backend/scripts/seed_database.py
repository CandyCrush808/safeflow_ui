from app.db.database import SessionLocal, create_tables
from app.db.seed import seed_database


if __name__ == "__main__":
    create_tables()
    with SessionLocal() as session:
        seed_database(session)
    print("Synthetic database seeded")
