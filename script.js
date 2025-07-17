const sidemenu = document.querySelector('#sidemenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openmenu(){
    sidemenu.style.transform = 'translateX(-16rem)';
}
function closemenu(){
    sidemenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
             'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50',
            'dark:border','dark:border-white/50',"dark:bg-transparent");
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
             'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50',
            'dark:border','dark:border-white/50',"dark:bg-transparent");    
    }
}
)

//---------------------light mode and dark mode--------------------------

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
}else{
    document.documentElement.classList.remove('dark')
}

function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
}

//-----------------hidden and show function for projects---------
// -------- Show More / Show Less Projects ---------
const showMoreBtn = document.getElementById('showMoreBtn');
const showLessBtn = document.getElementById('showLessBtn');
const extraProjectsWrapper = document.getElementById('extraProjectsWrapper');

showMoreBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  extraProjectsWrapper.classList.remove('hidden'); // show hidden projects
  showMoreBtn.classList.add('hidden'); // hide "Show More" button
});

showLessBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  extraProjectsWrapper.classList.add('hidden'); // hide extra projects again
  showMoreBtn.classList.remove('hidden'); // show "Show More" again
});
