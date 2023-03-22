const BASE_URL = `http://localhost:8080/api/rats`;

export async function getRats(){
   const apiResponse = await fetch(BASE_URL, { cache: 'no-store' });
   // const apiResponse = await fetch(`/api/employees/${id}`);
   const ratsData = await apiResponse.json();
   console.log("dataManagement.getRats.ratsData: ", ratsData)
  return ratsData;
};

export async function getRat(id: number){
  const newUrl = BASE_URL + `/${id}`;
  const apiResponse = await fetch(newUrl, { cache: 'no-store' });
  const ratData = await apiResponse.json();
 return ratData;
}

export type Rat = {
  id: number;
  name: string;
  breed: string;
  age: number;
  sex: string;
  clinicalStatus: string;
  spayed: boolean;
  city: string
}

export async function addRat(rat: Rat){
  const response = await fetch("http://localhost:8080/api/rats", {
    method: "POST",
    body: JSON.stringify(rat),
    headers: {
      "content-type": "application/json",
    },
  });
  const json = (await response.json()) as { addedRat: Rat };
  return json.addedRat;
}; 

export async function removeRat(id: number){
  const response = await fetch(`http://localhost:8080/api/rats/${id}`, {
    method: "DELETE",
  });
 // const json = (await response.json()) as { deletedRat: Rat };
//  return json.deletedRat;
};

export async function updateRat(id: number, rat: Rat){
  console.log("id: ", id);
  const response = await fetch(`http://localhost:8080/api/rats/${id}`, {
    method: "PATCH",
    body: JSON.stringify(rat),
    headers: {
      "content-type": "application/json",
    },  });
  const json = (await response.json()) as { addedRat: Rat };
  return json.addedRat;
}; 

