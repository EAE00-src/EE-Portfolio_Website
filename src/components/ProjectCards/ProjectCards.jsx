
const RenderProjects = ({project = []}) => {
    

    return (
        <div className="images-container">
            {
                project.map((proj, idx) => (
                    <div className="image-box" key={idx}>
                        <img className="project-image" src={proj.cover} alt="project"/>
                        <div className="content">
                            <p className="title">{proj.title}</p>
                            <h4 className="description">{proj.description}</h4>
                            <button className="btn" onClick={() => window.open(proj.url)}>
                                View
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