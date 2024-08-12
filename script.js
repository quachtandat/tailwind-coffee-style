document.addEventListener('DOMContentLoaded', () => {  
    const topMenu = document.getElementById('qtd-top-menu')  
    const topMenuicon = document.getElementById('qtd-top-menu-icon')  

    document.addEventListener('click', (e) => {  
        if (topMenuicon.contains(e.target)) { 
            topMenu.classList.toggle('qtd-top-menu-expend') 
            topMenu.classList.toggle('hidden')  
        } else {  
            // click outside  
            if(topMenu.classList.contains('qtd-top-menu-expend')){
                topMenu.classList.remove('qtd-top-menu-expend')
                topMenu.classList.add('hidden')
            }
        }  
    }) 
    
});