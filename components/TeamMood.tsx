"use client";
import { useState } from "react";
import Image from "next/image";
import {
  PersonOne,
  PersonTwo,
  PersonThree,
  PersonFour,
  PersonFive,
} from "@/asset/";
const teamMembersData = [
  { name: "Andrea", role: "UX Junior", mood: 4, image: PersonOne },
  { name: "Alvaro", role: "Back-end developer", mood: 3, image: PersonTwo },
  { name: "Juan", role: "UX Senior", mood: 4, image: PersonThree },
  { name: "Jose", role: "Marketing", mood: 1, image: PersonFour },
  { name: "Maria", role: "UX Junior", mood: 4, image: PersonFive },
];

const emojiMood = ["😡", "😞", "😐", "🙂", "😊"];

const TeamMood = () => {
  const [teamMembers, setTeamMembers] = useState(teamMembersData);

  const handleMoodChange = (index: number, newMood: number) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index].mood = newMood;
    setTeamMembers(updatedMembers);
  };

  return (
    <div className="bg-white  rounded-lg p-4 w-full">
      {teamMembers.map((member, index) => (
        <div key={index} className="border-b pb-4 last:border-none">
          <div className="flex items-center gap-4">
            <Image
              height={100}
              width={100}
              src={member.image}
              alt={member.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>

          <div className="relative w-full mt-4">
            <span
              className="absolute  transform text-2xl transition-all duration-300"
              style={{
                left: `${(member.mood / 4) * 100}%`,
                transform: `translateX(-${(member.mood / 4) * 100}%)`,
              }}
            >
              {emojiMood[member.mood]}
            </span>

            <input
              type="range"
              min="0"
              max="4"
              value={member.mood}
              onChange={(e) =>
                handleMoodChange(index, parseInt(e.target.value))
              }
              className="w-full mt-2 appearance-none bg-transparent cursor-pointer"
              style={{
                height: "8px",
                background: "#ddd",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMood;
