import Link from "next/link";
import Image from "next/image";

export default async function MemberCard({
  imgSrc,
  name,
  description,
  email,
  githubLink,
  color,
  linkedinLink,
  otherText,
  otherLink,
}: {
  imgSrc: string;
  name: string;
  description: string[];
  email: string;
  githubLink: string;
  color: string;
  linkedinLink?: string;
  otherText?: string;
  otherLink?: string;
}) {
  return (
    <div
      className={`flex flex-col flex-1 items-center text-center gap-4 border-2 p-10 rounded-lg border-${color} leading-snug`}
    >
      <Image
        src={imgSrc}
        width={250}
        height={250}
        className={`rounded-full border border-${color} p-1`}
      />
      <h2 className={`text-2xl text-${color} font-urbanist font-bold`}>
        {name}
      </h2>
      {description.map((desc, index) => (
        <p key={index}>{desc}</p>
      ))}
      <div className="flex flex-col gap-0 mt-3 text-gray-500">
        <div className="flex flex-row gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-5 h-5 text-${color}`}
          >
            <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
            <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
          </svg>
          <span>{email}</span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 8 50 40"
            width="21px"
            height="21px"
          >
            <path
              fill="currentColor"
              className={`text-${color}`}
              d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
            />
          </svg>
          <Link href={githubLink}>{githubLink.split("/").pop()}</Link>
        </div>
        {linkedinLink && (
          <div className="flex flex-row gap-2 items-center">
            <svg
              width="21"
              height="21"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z"
                fill="currentColor"
                className={`text-${color}`}
              />
            </svg>

            <Link href={linkedinLink}>{linkedinLink.split("/").pop()}</Link>
          </div>
        )}
        <div className="flex flex-row gap-2 items-center ml-7">
          {otherText && <Link href={otherLink}>{otherText}</Link>}
        </div>
      </div>
    </div>
  );
}
