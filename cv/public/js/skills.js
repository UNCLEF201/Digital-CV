// ---------------------------- animate skills ----------------------------

const api_url = 'js/skills.json';

loadBar = (id, skillPercent, speed) => {
    const elem = document.getElementById(id)
    let width = 20;
    var id = setInterval(fill, speed);

    function fill(){
        if(width >= skillPercent)
            clearInterval(id)
        else{
            width++; 
            elem.style.width = width + "%";
        }
    }
}

async function getSkills() {
    const response = await fetch (api_url);
    const data = await response.json();
    
    data.skills.forEach(function(skill){
        loadBar(skill.id, skill.percentage, skill.loadTime);
    });
}

getSkills();

// ---------------------------- animate skills ----------------------------