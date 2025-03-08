import ProjectCard from '../../../components/ProjectCard';

const projects = [
    {
        _id: 0,
        image: "https://i.ibb.co.com/r7c6JBP/Screenshot-81.png",
        name: "Gadget Heaven",
        description: "This platform is a gadget-buying website designed using React, where users can explore, filter, and purchase products. The website includes key features such as a shopping cart, wishlist system, product filtering, and responsive design."
    },
    {
        _id: 1,
        image: "https://i.ibb.co.com/353FnKQC/Screenshot-118.png",
        name: "Lumeno",
        description: "Lumeno - Collaborative Study Platform is a responsive React-based platform connecting students, tutors, and admins for study sessions, resource sharing, and management. Features JWT authentication, role-based access, TanStack Query, and optimized UI for all devices."
    },
    {
        _id: 2,
        image: "https://i.ibb.co.com/x2145PC/Screenshot-76.png",
        name: "Cause Bridge",
        description: "CauseBridge is a volunteer management platform built with React and TailwindCSS. Users can create, view, and manage volunteer posts, with Firebase authentication and JWT security. Features include a responsive design, dark/light mode toggle, and toast notifications."
    }
]

const Projects = () => {
    return (
        <div className='grid grid-cols-1 gap-24'>
            {projects.map((project, index) => <ProjectCard key={project._id} project={project} index={index} />)}
        </div>
    );
};

export default Projects;