import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import joblib

# Load the dataset
data = pd.read_csv('traffic_data.csv')  # Ensure this path is correct

# Preprocessing
data['date_time'] = pd.to_datetime(data['date_time'])
data['hour'] = data['date_time'].dt.hour
data['day'] = data['date_time'].dt.dayofweek
data['month'] = data['date_time'].dt.month

# Features and target variable
X = data[['hour', 'day', 'month']]  # Use relevant features
y = data['traffic_volume']  # Target variable

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestRegressor()
model.fit(X_train, y_train)

# Save the model
joblib.dump(model, 'traffic_model.pkl')
