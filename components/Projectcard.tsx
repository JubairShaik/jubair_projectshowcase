import Image from 'next/image'
import Link from 'next/link'



const Projectcard = ({ projects }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {projects.map((project) => (


    <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          <div key={project._id} className="bg-slate-800 shadow-lg  p-2 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={400}
              className="object-cover rounded-lg border border-gray-500"
            />
            <div className="px-2 pt-3 flex justify-between  items-center">
              <h2 className="text-xl font-semibold text-slate-300">{project.name}</h2>
            </div> 
            {/* <Link href={project.url} target="_blank" className="text-sm  rounded-md text-white  bg-slate-700 p-2 hover:text-indigo-600"> Live Website </Link>
                */}
          </div>

          </Link>
        ))}
      </div>
    );
  };
  
export default Projectcard
