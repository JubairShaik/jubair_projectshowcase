import Image from 'next/image'
import Link from 'next/link'

interface ProjectType {
  // Add your project properties here
 
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;


}


// Define the type for the props of the Projectcard component
interface ProjectcardProps {
  projects: ProjectType[];
}




const Projectcard: React.FC<ProjectcardProps> = ({ projects }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-10 gap-6">
        {projects.map((project) => (


    <Link href={`/projects/${project.slug}`} key={project._id} className="  z-20  rounded-lg  hover:scale-105 hover:border-blue-500 transition">
          <div key={project._id} className=" p-2  bg-slate-900  shadow-lg   rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              width={800}
              height={400}
              className="object-cover rounded-lg  "
            />



            <div className="px-2 pt-3 flex justify-between  items-center">
              <h2 className="text-xl font-semibold font-mont  text-slate-300">{project.name}</h2>
            </div> 
          
          </div>

          </Link>
        ))}
      </div>
    );
  };
  
export default Projectcard
