import pandas as pd 
df = pd.read_csv("star_with_gravity.csv") 
df.head() 
df.drop(['Unnamed: 0'],axis =1,inplace=True) 
name = df["Star_name"].to_list() 
mass = df["Mass"].to_list() 
radius = df["Radius"].to_list() 
dist = df["Distance"].to_list() 
gravity = df["Gravity"].to_list() 
final_star_list = [] 
temp_dict ={} 
for i in range(0,len(name)): 
    temp_dict["name"]=name[i] 
    temp_dict["mass"]=mass[i] 
    temp_dict["radius"]=radius[i] 
    temp_dict["distance"]=dist[i] 
    temp_dict["gravity"]= gravity[i] 
    final_star_list.append(temp_dict) 
    temp_dict ={} 
print(final_star_list)