import React from 'react';
import Image from 'next/image';
import FeBg from '@/public/images/about11.jpg';
import home2 from '@/public/images/home2.jpg';

export default function ResourcesLinks() {
  return (
    <section className="relative" style={{ backgroundColor: "#f6f6f6" }}>
      <div className="container mx-auto mt-12 px-4">
        <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-600 to-blue-400">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Skin Cancer Foundation */}
              <ResourceCard
                title="Skin Cancer Foundation"
                links={[
                  { text: "Skin Cancer Facts & Statistics", url: "#" },
                  { text: "Facts about skin cancer in people of color", url: "#" }
                ]}
              />
              {/* American Academy of Dermatology */}
              <ResourceCard
                title="American Academy of Dermatology"
                links={[
                  { text: "Skin Cancer Prevention", url: "#" },
                  { text: "The Dangers of Indoor tanning", url: "#" },
                  { text: "Indoor tanning stats and facts", url: "#" },
                  { text: "Skin Cancer stats and facts", url: "#" }
                ]}
              />
              {/* Melanoma Research Fund (MRF) */}
              <ResourceCard
                title="Melanoma Research Fund (MRF)"
                links={[
                  { text: "Preventing Melanoma", url: "#" },
                  { text: "MRF’s Educator Course for Healthcare Students", url: "#" }
                ]}
              />
              {/* Centers for Disease Control */}
              <ResourceCard
                title="Centers for Disease Control"
                links={[
                  { text: "Skin Cancer – Sun Safety", url: "#" }
                ]}
              />
              {/* US Food and Drug Administration */}
              <ResourceCard
                title="US Food and Drug Administration"
                links={[
                  { text: "Indoor Tanning: The risks of ultraviolet radiation", url: "#" }
                ]}
              />
              {/* National Council on Skin Cancer Prevention */}
              <ResourceCard
                title="National Council on Skin Cancer Prevention"
                links={[
                  { text: "Webpage: www.skincancerprevention.org", url: "#" },
                  { text: "Twitter: @skincancerprev", url: "#" },
                  { text: "Facebook: @natlcouncilskincancerprevention", url: "#" },
                  { text: "IG: @skincancerprev", url: "#" }
                ]}
              />
              {/* Skin Smart Campus */}
              <ResourceCard
                title="Skin Smart Campus"
                links={[
                  { text: "Webpage: www.skinsmartcampus.org", url: "#" },
                  { text: "Twitter: @skinsmartcampus", url: "#" },
                  { text: "Facebook: @skinsmartcampus", url: "#" }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ResourceCard = ({ title, links }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a href={link.url} className="text-blue-700 hover:underline">{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
