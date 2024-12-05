

  // post data using fetch

  async function postData() {
    try {
      const response = await fetch('https://secrets-api.appbrewery.com/register'
        , {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        
        },
        // this name is already registered in appbrewery api sir try different usename and password to resgister yourself then make a post req 
        body: JSON.stringify({
            "username": "abrarisop786",
            "password": "SimpleDev7"
          }) 
      });
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json(); 
      console.log(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
//   run this function 
//   postData();


//   get data using fetch 
async function fetchData() {
    try {
      const response = await fetch('https://bored-api.appbrewery.com/random');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json(); 
      console.log(data); 
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

//  Run this function 
//   fetchData();
  
  