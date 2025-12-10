// import { serviceData } from '../../appData'
// import SectionHeading from '../SectionHeading/SectionHeading'
// import ServiceCard from './ServiceCard'

// const ServiceSection = () => {
//   return (
//     <section id="services" className="my-14">
//       <SectionHeading
//         title="// Services / Offers:"
//         subtitle="I offer a wide range of services to ensure you have the best written code and stay ahead in the competition."
//       />

//       <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-3">
//         {serviceData.map((service, index) => (
//           <ServiceCard
//             key={index}
//             icon={service.icon}
//             title={service.title}
//             shortDescription={service.shortDescription}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// export default ServiceSection


"use client"

import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'

const ServiceSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.section 
      id="services" 
      className="my-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading
        title="// Services / Offers:"
        subtitle="I offer a wide range of services to ensure you have the best written code and stay ahead in the competition."
      />

      <motion.div 
        className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              shortDescription={service.shortDescription}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default ServiceSection
