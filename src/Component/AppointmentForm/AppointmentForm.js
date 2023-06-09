import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AppointmentForm = () => {

  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name= form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
  
    const appointments = {
     name,email,phone,date
    }
  

    const url = 'https://appointment-form.vercel.app/appointment'

    fetch(url, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(appointments)
    }).then(res => res.json())
      .then(data => {
        toast.success('Appointment added successfully')
      })
      .catch(err => console.log(err));
      e.target.reset();
  }
    return (
        <div >
          <h2 className="text-2xl text-sky-500 font-bold ml-9 p-5 mt-10 ">Appointment Form</h2>
 <div data-aos="zoom-in-up" data-aos-duration="1500"   className=" mt-8 mx-auto bg-sky-100 shadow-lg rounded-lg py-8 px-6 w-6/12">
  
  <form  onSubmit={formHandler}>
<div>
<div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="name">
       Name
      </label>
      <input
        class="w-full border border-sky-400 rounded-lg p-2"
        type="text"
        id="name"
        name="name"
        required
      />
    </div>
<div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="email">
       Email
      </label>
      <input
        class="w-full border border-sky-400 rounded-lg p-2"
        type="text"
        id="email"
        name="email"
        required
      />
    </div>
<div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="phone">
      Phone
      </label>
      <input
        class="w-full border border-sky-400 rounded-lg p-2"
        type="text"
        id="phone"
        name="phone"
        required
      />
    </div>
  
    <div class="mb-4">
      <label class="block text-sky-500 font-bold mb-2" for="date">
      Date
      </label>
      <input
        class="w-full border border-sky-400 rounded-lg p-2"
        type="date"
        id="date"
        name="Date"
        required
      />
    </div>
</div>

  <div class="flex items-center justify-center">
    <button  type='submit' class="bg-sky-400 hover:bg-green-400 text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline rounded-full  mt-5">
    Make Appointment
    </button>
  </div>
    </form>
    </div>
    <Toaster />
        </div>
      
    );
};

export default AppointmentForm;