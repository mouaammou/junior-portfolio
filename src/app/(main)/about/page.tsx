const AboutMe = () => {

   return (
      <div className="flex min-h-screen flex-col lg:ml-60 px-2 md:p-10">
         {/* top section */}
         <div className="relative flex justify-start items-start  mt-20 flex-col">
            <h1 className="text-7xl md:text-big font-black mb-4">About</h1>
            <p className="tiri_8 relative ml-10 text-lg">A little bit about me</p>
         </div>
         
         {/* main content */}
         <div className="flex gap-10 justify-center h-full py-5 my-5 max-md:flex-col">
            <div>
               <img src="/mouaad.jpg" alt="profile page" className="w-80 mx-auto md:w-[50rem]"/>
            </div>
            <div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui eum veritatis delectus laborum tempora consequuntur, minus ipsam maiores repellat veniam debitis quia totam impedit aspernatur beatae suscipit quo dolorem.</p>
               <br />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui eum veritatis delectus laborum tempora consequuntur, minus ipsam maiores repellat veniam debitis quia totam impedit aspernatur beatae suscipit quo dolorem.</p>
               <br />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui eum veritatis delectus laborum tempora consequuntur, minus ipsam maiores repellat veniam debitis quia totam impedit aspernatur beatae suscipit quo dolorem.</p>
               <br />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui eum veritatis delectus laborum tempora consequuntur, minus ipsam maiores repellat veniam debitis quia totam impedit aspernatur beatae suscipit quo dolorem.</p>
            </div>
         </div>
      </div>
   )

};

export default AboutMe;