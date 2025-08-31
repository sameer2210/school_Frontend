'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().min(2).required('Name is required'),
    address: yup.string().min(3).required('Address is required'),
    city: yup.string().min(2).required('City is required'),
    state: yup.string().min(2).required('State is required'),
    contact: yup.number().positive().integer().required('Contact number is required'),
    image: yup.string().url('Must be a valid URL').required('Image URL is required'),
    email_id: yup.string().email('Invalid email').required('Email is required'),
    latitude: yup.number().min(-90).max(90).nullable(),
    longitude: yup.number().min(-180).max(180).nullable(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('http://localhost:3000/addSchool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('School added successfully');
        reset();
      } else {
        alert('Failed to add school');
      }
    } catch (error) {
      alert('Error adding school');
    }
  };

  return (
    <section className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New School</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            {...register('name')}
            className="mt-1 block w-full border rounded-md p-2"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium">
            Address
          </label>
          <input
            id="address"
            {...register('address')}
            className="mt-1 block w-full border rounded-md p-2"
          />
          {errors.address && <p className="text-red-600 text-sm">{errors.address.message}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            id="city"
            {...register('city')}
            className="mt-1 block w-full border rounded-md p-2"
          />
          {errors.city && <p className="text-red-600 text-sm">{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium">
            State
          </label>
          <input
            id="state"
            {...register('state')}
            className="mt-1 block w-full border rounded-md p-2"
          />
          {errors.state && <p className="text-red-600 text-sm">{errors.state.message}</p>}
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium">
            Contact Number
          </label>
          <input
            id="contact"
            type="number"
            {...register('contact')}
            className="mt-1 block w-full border rounded-md p-2"
          />
          {errors.contact && <p className="text-red-600 text-sm">{errors.contact.message}</p>}
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium">
            Image URL
          </label>
          <input
            id="image"
            {...register('image')}
            className="mt-1 block w-full border rounded-md p-2"
          />
          {errors.image && <p className="text-red-600 text-sm">{errors.image.message}</p>}
        </div>

        <div>
          <label htmlFor="email_id" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email_id"
            type="email"
            {...register('email_id')}
            className="mt-1 block w-full border rounded-md p-2"
          />
          {errors.email_id && <p className="text-red-600 text-sm">{errors.email_id.message}</p>}
        </div>

        <div>
          <label htmlFor="latitude" className="block text-sm font-medium">
            Latitude (optional)
          </label>
          <input
            id="latitude"
            type="number"
            step="any"
            {...register('latitude')}
            className="mt-1 block w-full border rounded-md p-2"
          />
          {errors.latitude && <p className="text-red-600 text-sm">{errors.latitude.message}</p>}
        </div>

        <div>
          <label htmlFor="longitude" className="block text-sm font-medium">
            Longitude (optional)
          </label>
          <input
            id="longitude"
            type="number"
            step="any"
            {...register('longitude')}
            className="mt-1 block w-full border rounded-md p-2"
          />
          {errors.longitude && <p className="text-red-600 text-sm">{errors.longitude.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
