// // import { Project } from '@/lib/types'
// // import SectionHeading from '../SectionHeading/SectionHeading'
// // import ProjectCard from './ProjectCard'

// // interface ProjectSectionProps {
// //   projects: Project[]
// // }

// // const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
// //   return (
// //     <section id="projects">
// //       <SectionHeading title="// Projects" />

// //       <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
// //         {projects.map((project) => (
// //           <ProjectCard key={project.priority} data={project} />
// //         ))}
// //       </div>
// //     </section>
// //   )
// // }

// // export default ProjectSection
// "use client"
// import { Project } from '@/lib/types'
// import SectionHeading from '../SectionHeading/SectionHeading'
// import ProjectCard from './ProjectCard'
// import { motion } from 'framer-motion'

// interface ProjectSectionProps {
//   projects: Project[]
// }

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3
//     }
//   }
// }

// const itemVariants = {
//   hidden: { 
//     opacity: 0, 
//     y: 20 
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease:  [0.25, 0.1, 0.25, 1]
//     }
//   }
// }

// const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
//   // Sort projects by priority for consistent ordering
//   const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority)

//   return (
//     <motion.section 
//       id="projects"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 0.6 }}
//     >
//       <SectionHeading title="// Projects" />

//       <motion.div 
//         className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//       >
//         {sortedProjects.map((project, index) => (
//           <motion.div 
//             key={project.priority} 
//             variants={itemVariants}
            
//           >
//             <ProjectCard data={project} />
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.section>
//   )
// }

// export default ProjectSection






"use client"

import { Project } from "@/lib/types"
import SectionHeading from "../SectionHeading/SectionHeading"
import ProjectCard from "./ProjectCard"
import { motion, type Variants } from "framer-motion"

interface ProjectSectionProps {
  projects: Project[]
}

// ✅ typed cubic-bezier tuple (fixes: number[] not assignable to Easing)
const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  // Sort projects by priority for consistent ordering
  const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority)

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: easing }}
    >
      <SectionHeading title="// Projects" />

      <motion.div
        className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {sortedProjects.map((project) => (
          <motion.div key={project.priority} variants={itemVariants}>
            <ProjectCard data={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default ProjectSection
