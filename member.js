function skillsMember() {
    const skills = document.querySelectorAll('.skills__content');

    skills.forEach((skill) => {
        skill.addEventListener('click', () => {
            skill.classList.toggle('skills__open');
        });
    });
}

export default skillsMember;    