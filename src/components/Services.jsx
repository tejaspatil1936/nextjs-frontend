// // // components/Services.jsx
// // export default function Services() {
// //   const services = [
// //     {
// //       title: "Individual Counseling",
// //       description: "One-on-one sessions tailored to your specific needs",
// //       image: "/service1.jpg"
// //     },
// //     {
// //       title: "Couples Therapy", 
// //       description: "Relationship guidance and communication improvement",
// //       image: "/service2.jpg"
// //     }
// //   ]

// //   return (
// //     <section className="py-16 bg-white">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">How I Help</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           {services.map((service, index) => (
// //             <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
// //               <img src={service.image} alt={service.title} className="w-full h-48 object-cover"/>
// //               <div className="p-6">
// //                 <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h3>
// //                 <p className="text-gray-600">{service.description}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// export default function Services() {
//   const services = [
//     {
//       title: "Christian Individual Counseling in Richmond, VA",
//       description: "Discover Peace, Purpose, and God's Truth in Richmond, VA.",
//       image: "/service1.jpg",
//       link: "/therapy/christian-individual-counseling/richmond"
//     },
//     {
//       title: "Christian Couples Counseling in Richmond, VA",
//       description: "Heal Your Relationship, Grow Closer to God Together in Richmond.",
//       image: "/service2.jpg",
//       link: "/therapy/christian-couples-counseling/richmond"
//     }
//   ];

//   return (
//     <section className="py-20 bg-[#f5f5f7] relative">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <h2 className="text-5xl font-extrabold text-[#114b44] mb-14">How I Help</h2>

//         {/* Service Cards */}
// <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px]">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-[#b6ede4] border border-[#1abc9c] rounded-2xl shadow-lg hover:shadow-xl transition duration-300 w-full max-w-[520px] h-[460px] flex flex-col overflow-hidden"
//             >
//               {/* Image */}
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-[220px] object-cover"
//               />

//               {/* Content */}
//               <div className="p-6 flex flex-col justify-between flex-grow">
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
//                     {service.title}
//                   </h3>
//                   <p className="text-[15px] text-gray-800 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Button */}
//                 <a
//                   href={service.link}
//                   className="mt-4 text-center border border-gray-600 text-gray-900 py-2 text-base rounded hover:bg-[#d2f4ec] transition font-medium"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Decorative Plant (bottom right corner) */}
//       <img
//         src="/plant.png"
//         alt="Decorative Plant"
//         className="hidden md:block absolute bottom-0 right-4 w-32 pointer-events-none"
//       />
//     </section>
//   );
// }


// export default function Services() {
//   const services = [
//     {
//       title: "Christian Individual Counseling in Richmond, VA",
//       description: "Discover Peace, Purpose, and God's Truth in Richmond, VA.",
//       image: "/service1.jpg",
//       link: "/therapy/individual-counseling/richmond",
//     },
//     {
//       title: "Christian Couples Counseling in Richmond, VA",
//       description: "Heal Your Relationship, Grow Closer to God Together in Richmond.",
//       image: "/service2.jpg",
//       link: "/therapy/christian-couples-counseling/richmond",
//     },
//   ];

//   return (
//     <section className="bg-[#f4f4f6] py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-5xl font-extrabold text-[#114b44] mb-14">How I Help</h2>

//         <div className="flex gap-[30px] flex-wrap justify-start">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-[#b6ede4] border border-[#1abc9c] rounded-2xl shadow-lg hover:shadow-xl transition duration-300 w-[460px] h-[500px] flex flex-col overflow-hidden"
//             >
//               {/* Image */}
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-[340px] object-cover"
//               />

//               {/* Content */}
//               <div className="p-6 flex flex-col flex-grow">
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
//                     {service.title}
//                   </h3>
//                   <p className="text-[16px] text-gray-800 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Button */}
//                 <a
//                   href={service.link}
//                   className="mt-4 text-center border border-gray-600 text-gray-900 py-2 text-base rounded hover:bg-[#d2f4ec] transition font-medium"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management ",
      description: " Learn practical tools and faith-based strategies to calm anxiety and regain inner peace.",
      image: "/service1.jpg",
      link: "/therapy/individual-counseling/richmond",
    },
    {
      title: "Relationship Counseling",
      description: " Strengthen communication and deepen emotional and spiritual connection in your relationships.",
      image: "/service2.jpg",
      link: "/therapy/christian-couples-counseling/richmond",
    },
    {
      title: "Trauma Recovery",
      description: " Heal from past wounds through compassionate care grounded in Christian principles",
      image: "/service3.jpg", // Make sure this image exists in /public
      link: "/therapy/trauma-recovery/richmond",
    },
  ];

  return (
    <section className="bg-[#f4f4f6] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-[#114b44] mb-14 text-center">How I Help</h2>

        <div className="flex gap-[30px] flex-wrap justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#b6ede4] border border-[#1abc9c] rounded-2xl shadow-lg hover:shadow-xl transition duration-300 w-[460px] h-[500px] flex flex-col overflow-hidden"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[340px] object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-gray-800 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Button */}
                <a
                  href={service.link}
                  className="mt-4 text-center border border-gray-600 text-gray-900 py-2 text-base rounded hover:bg-[#d2f4ec] transition font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
