import prisma from '@/util/prisma'
import { redirect } from 'next/navigation'

export default async function Upload({
  searchParams
}: {
  searchParams: Promise<{ message: string }>
}) {
  const { message } = await searchParams
  async function handlePosting(data: FormData) {
    'use server'

    const success = await fetch(`http://localhost:3000/api/shop`, {
      method: 'post',
      body: data
    })

    if (!success.ok) {
      redirect('/upload?message=something is wrong')
    }

    const uploadPost = await prisma.shop.create({
      data: {
        title: data.get('title')?.toString() as string,
        description: data.get('description')?.toString() as string,
        star: parseInt(data.get('star')?.toString() as string),
        deliveryTime: data.get('deliveryTime')?.toString() as string,
        deliveryFee: data.get('deliveryFee')?.toString() as string,
        minimumOrder: data.get('minimumOrder')?.toString() as string,
        cardImage: data.get('cardImage')?.toString() as string,
        coverImage: data.get('coverImage')?.toString() as string,
        tag: data.get('tag')?.toString() as string
      }
    })
    if (uploadPost) {
      return redirect('/upload?message=success')
    }
    return redirect('/upload?message=something is wrong')
  }

  return (
    <form
      className="flex h-screen w-full items-center justify-center"
      action="/api/shop"
    >
      <div className="rounded-md border border-black p-8">
        <h2 className="mb-2 text-3xl font-bold">Upload</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="star">Star</label>
          <input type="number" id="star" name="star" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="deliveryTime">DeliveryTime</label>
          <input type="text" id="deliveryTime" name="deliveryTime" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="deliveryFee">DeliveryFee</label>
          <input type="text" id="deliveryFee" name="deliveryFee" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="minimumOrder">MinimumOrder</label>
          <input type="text" id="minimumOrder" name="minimumOrder" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cardImage">CardImg</label>
          <input type="text" id="cardImage" name="cardImage" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="coverImage">CoverImage</label>
          <input type="text" id="coverImage" name="coverImage" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tag">tag</label>
          <input type="text" id="tag" name="tag" />
        </div>
        <button
          formAction={handlePosting}
          className="mt-2 rounded-md bg-blue-500 px-2 py-1 text-white"
        >
          submit
        </button>
        {message && <p className="text-red-500">{message}</p>}
      </div>
    </form>
  )
}
