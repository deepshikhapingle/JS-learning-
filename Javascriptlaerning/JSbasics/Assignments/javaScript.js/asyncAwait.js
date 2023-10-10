const whereAmI = async function (country){

    const res = await fetch(

    "https://github.com/incubyte/playbook/blob/page/roles-test-craftsperson/docs/handbook/Roles-at-Incubyte/Test-Craftsperson-Expertise-Levels-and-Guideli.md"
    );
    
   const data = await res.json();

   console.log(data);
    };

    whereAmI("India")