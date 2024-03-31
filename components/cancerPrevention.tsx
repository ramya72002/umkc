import Image from 'next/image';

export default function CancerPrevention() {
  return (
    <section className="relative">
      <div className="container mx-auto mt-12 px-4 flex flex-wrap items-center" style={{backgroundColor:"#0066cc"}}>
        <div className="content">
          <button className="container flex justify-center items-center button-yellow mb-8">Skin Cancer Prevention</button>
          <div className="sun-safety border-yellow-500 border-2 rounded-lg p-4 mb-4">
            <h2 className="text-yellow-500 text-lg font-bold mb-2">Sun Safety Practices</h2>
            <ul className="text-white">
              <li>
                <strong>Seek Shade</strong>
                <ul>
                  <li>When outdoors, seek shade under trees, umbrellas, or other structures to reduce direct exposure to sunlight.</li>
                  <li>Especially important during peak sun hours, typically between 10 a.m. and 4 p.m.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="sunscreen border-yellow-500 border-2 rounded-lg p-4 mb-4">
            <h2 className="text-yellow-500 text-lg font-bold mb-2">Wear Sunscreen</h2>
            <ul className="text-white">
              <li>
                <ul>
                  <li>Apply broad-spectrum sunscreen with SPF 30 or higher to all exposed skin areas, including face, neck, arms, and legs.</li>
                  <li>Reapply sunscreen every two hours, or more frequently if swimming or sweating.</li>
                  <li>Choose water-resistant sunscreen for prolonged outdoor activities.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="clothing border-yellow-500 border-2 rounded-lg p-4 mb-4">
            <h2 className="text-yellow-500 text-lg font-bold mb-2">Wear Protective Clothing</h2>
            <ul className="text-white">
              <li>
                <ul>
                  <li>Cover up with lightweight, tightly woven clothing that protects the skin from UV rays.</li>
                  <li>Wear a wide-brimmed hat to shade the face, neck, and ears.</li>
                  <li>Wear sunglasses with UV protection to shield the eyes from harmful UV radiation.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="uv-index border-yellow-500 border-2 rounded-lg p-4 mb-4">
            <h2 className="text-yellow-500 text-lg font-bold mb-2">Check the UV Index</h2>
            <ul className="text-white">
              <li>
                <ul>
                  <li>Monitor the UV index regularly, especially before planning outdoor activities.</li>
                  <li>Limit outdoor exposure when the UV index is high (typically >3), as UV radiation levels are most intense during these times.</li>
                  <li>Adjust sun protection measures accordingly based on the UV index forecast for the day.</li>
                </ul>
              </li>
            </ul>
          </div>
          <p className="text-white">The UV Index predicts the ultraviolet radiation levels on a 1-11+ scale, helping people determine appropriate sun-protective behaviors. Find your area’s UV index rating through the National Weather Service to determine the necessary precautions.</p>
        </div>
      </div>
    </section>
  );
}
