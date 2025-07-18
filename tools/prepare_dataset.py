import pandas as pd
import random

def generate_miami_coords():
    base_lat = 25.7617
    base_lon = -80.1918
    lat_offset = (random.random() - 0.5) * 0.5
    lon_offset = (random.random() - 0.5) * 0.5
    return f"'{base_lat + lat_offset}, {base_lon + lon_offset}'" # Keep quotes for CSV format

def transform_item_type(item_type):
    mapping = {
        "GID-PAN": "ID-Card",
        "GID-Liscence": "Drivers-License",
        "GID-Aadhar": "ID-Card",
        "GID-Passport": "Passport",
        "P-Letters": "Letters",
        "P-Fragile Items": "Fragile-Items",
        "P-Articles": "Articles",
    }
    return mapping.get(item_type, item_type)

def main():
    input_csv = "Dataset.csv"
    output_csv = "Dataset.csv"

    try:
        df = pd.read_csv(input_csv)
    except Exception as e:
        print(f"❌ Error reading {input_csv}: {e}")
        return

    # Strip whitespace from column names
    df.columns = df.columns.str.strip()

    # Check for required columns
    required_cols = ["Delivery Address (Lat, Long)", "Item Type"]
    if not all(col in df.columns for col in required_cols):
        print(f"❌ The file is missing the required columns. Found: {df.columns.tolist()}")
        return

    # Update rows
    df["Delivery Address (Lat, Long)"] = [generate_miami_coords() for _ in range(len(df))]
    df["Item Type"] = df["Item Type"].apply(transform_item_type)

    try:
        df.to_csv(output_csv, index=False)
        print(f"✅ Successfully updated {output_csv} for use in Miami.")
    except Exception as e:
        print(f"❌ Error writing {output_csv}: {e}")

if __name__ == "__main__":
    main() 