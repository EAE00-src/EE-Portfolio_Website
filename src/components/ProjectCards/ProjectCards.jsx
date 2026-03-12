
const RenderProjects = ({project = []}) => {
    

    return (
        <div className="images-container">
            {
                project.map((proj) => (
                    <div className="image-box" key={proj.id}>
                        <img 
                            className="project-image" 
                            src={import.meta.env.BASE_URL + (proj.cover.startsWith('/') ? proj.cover.slice(1) : proj.cover)} 
                            alt={proj.title} 
                            loading="lazy"
                         />
                        <div className="content">
                            <p className="title">{proj.title}</p>
                            <h4 className="description">{proj.description}</h4>
                            <button aria-label="Go to project repository" className="btn" onClick={() => window.open(proj.url)}>
                                View Code
                            </button>
                        </div>
                    </div>
                )
                    )
            }
        </div>
    );
};

export default RenderProjects;