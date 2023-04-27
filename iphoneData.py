import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
import matplotlib.pyplot as plt

data = pd.read_csv("apple_products.csv")
# print(data.head())

# print(data.isnull().sum())

# print(data.describe())

highest_rated = data.sort_values(by=["Star Rating"], ascending=False)
highest_rated = highest_rated.head(10)
print(highest_rated['Product Name'])

iphones = highest_rated["Product Name"].value_counts()
label = iphones.index
counts = highest_rated["Number Of Ratings"]
figure = px.bar(highest_rated, x=label, y = counts, title="Number of Ratings of Highest Rated iPhones")
figure.show()

iphones = highest_rated["Product Name"].value_counts()
label = iphones.index
counts = highest_rated["Number Of Ratings"]
figure = px.scatter(highest_rated, x=label, y = counts, title="Number of Ratings of Highest Rated iPhones")
figure.show()

# fig, ax = plt.subplots()
# ax.bar(label, counts)

# ax.set_title("Bar Chart Example")
# ax.set_xlabel("X-axis Label")
# ax.set_ylabel("Y-axis Label")
# fig.set_size_inches(8, 6)

# plt.show()

fig, ax = plt.subplots()
ax.scatter(label, counts)

ax.set_title("Relationship between Discount Percentage and Number of Ratings of iPhones")
ax.set_xlabel("Discount")
ax.set_ylabel("Number of Ratings")
fig.set_size_inches(8, 6)

# plt.show()

# figure = px.scatter(data_frame = data, x="Number Of Ratings",
#                     y="Sale Price", size="Discount Percentage", 
#                     trendline="ols", 
#                     title="Relationship between Sale Price and Number of Ratings of iPhones")
# figure.show()