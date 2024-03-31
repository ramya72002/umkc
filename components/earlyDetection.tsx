import FeBg from '@/public/images/about11.jpg'
import home2 from '@/public/images/home2.jpg'
import Image from 'next/image'

export default function EarlyDetection() {
  return (
    <section className="relative" style={{ backgroundColor: "#04487f" }}>
      <div className="container mx-auto mt-12 px-4 flex flex-wrap items-center">
        <button className="container flex justify-center items-center button-yellow mb-8">About Cancer Facts</button>
        <div className="w-full md:w-1/2">
          <Image src={FeBg} alt="FeBg" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-white text-3xl font-bold mb-4">Melanoma: Early Detection</h2>
          <p className="text-white text-lg mb-6">
            Melanoma, the deadliest form of skin cancer, can be effectively treated if detected early. It is crucial to become familiar with your skin and conduct monthly self-skin examinations. Seeking assistance from a partner or friend to inspect hard-to-reach areas such as the back and scalp enhances the thoroughness of these examinations. Promptly notify your healthcare provider upon observing any potential warning signs to ensure prompt medical intervention.
          </p>
          <p className="text-white text-lg mb-6">
            View American Cancer Society’s guide or the American Academy of Dermatology Association’s guide to doing self-skin examinations.
          </p>
          <div className="border border-white rounded-lg p-4 mb-6">
            <h3 className="text-white text-2xl font-bold mb-4">ABCDE’s of Melanoma</h3>
            <ul className="list-disc list-inside">
              <li className="text-white mb-4">
                <span className="text-yellow-300 font-bold">A (Asymmetry):</span> Irregularly shaped where one half does not match the other half
              </li>
              <li className="text-white mb-4">
                <span className="text-yellow-300 font-bold">B (Border):</span> Uneven or irregular borders (scalloped or notched borders)
              </li>
              <li className="text-white mb-4">
                <span className="text-yellow-300 font-bold">C (Color):</span> Variation in color within the mole (shades of brown, black, red, blue, or white may be present)
              </li>
              <li className="text-white mb-4">
                <span className="text-yellow-300 font-bold">D (Diameter):</span> Larger than 6 mm (the size of a pencil eraser)
              </li>
              <li className="text-white">
                <span className="text-yellow-300 font-bold">E (Evolution):</span> Changes in size, shape, color, and/or elevation over time. Development of symptoms like itching or bleeding
              </li>
            </ul>
          </div>
          <div className="border border-white rounded-lg p-4">
            <h3 className="text-white text-2xl font-bold mb-4">Explanation of ABCDE</h3>
            <p className="text-white mb-4"><span className="text-yellow-300 font-bold">A is for Asymmetry:</span> One half of the spot is unlike the other half.</p>
            <p className="text-white mb-4"><span className="text-yellow-300 font-bold">B is for Border:</span> The spot has an irregular, scalloped, or poorly defined border.</p>
            <p className="text-white mb-4"><span className="text-yellow-300 font-bold">C is for Color:</span> The spot has varying colors from one area to the next, such as shades of tan, brown or black, or areas of white, red, or blue.</p>
            <p className="text-white mb-4"><span className="text-yellow-300 font-bold">D is for Diameter:</span> While melanomas are usually greater than 6 millimeters, or about the size of a pencil eraser, when diagnosed, they can be smaller.</p>
            <p className="text-white"><span className="text-yellow-300 font-bold">E is for Evolving:</span> The spot looks different from the rest or is changing in size, shape, or color.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
