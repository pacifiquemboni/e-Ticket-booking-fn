import React, { forwardRef, useState } from 'react';
import faqbg from '../../assets/images/faqBg.png';

const FAQs = forwardRef<HTMLDivElement>((props, ref) => {
  const [ans1, setAns1] = useState(false);
  const [ans2, setAns2] = useState(false);
  const [ans3, setAns3] = useState(false);
  const [ans4, setAns4] = useState(false);

  const [ans5, setAns5] = useState(false);

  const toggleShowAns1 = () => {
    setAns1(!ans1);
  };
  const toggleShowAns2 = () => {
    setAns2(!ans2);
  };
  const toggleShowAns3 = () => {
    setAns3(!ans3);
  };
  const toggleShowAns4 = () => {
    setAns4(!ans4);
  };
  const toggleShowAns5 = () => {
    setAns5(!ans5);
  };

  return (
    <div
      className="h-auto min-h-screen"
      ref={ref}
      style={{
        backgroundImage: `url(${faqbg})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className=" lg:mx-24 md:mx-24 h-auto text-white p-4">
        <h1 className="pt-16 text-2xl">Frequently Asked Questions</h1>
        <hr className="w-28 bg-white p-1" />

        <div className="text-center  w-10/12 m-auto text-2xl">
          <p className="p-3 cursor-pointer" onClick={toggleShowAns1}>
            + How do i book a bus ticket online?{' '}
          </p>
          {ans1 && (
            <div className="bg-third text-primary">
              <p>
                go to a bus booking website, select your departure and arrival
                locations, choose your travel date, browse available bus
                options, pick your desired seats, enter passenger details, and
                complete the payment to receive your electronic ticket;{' '}
              </p>
            </div>
          )}
          <hr />
          <p className="p-3 cursor-pointer" onClick={toggleShowAns2}>
            + Can i select my seat while booking?
          </p>
          {ans2 && (
            <div className="bg-third text-primary">
              <p>
                Yes, you can typically select your seat while booking a bus
                ticket online, and this feature adds convenience and flexibility
                to your travel plans. When booking through most bus operators or
                online platforms, you'll be presented with a seating chart after
                choosing your bus.{' '}
              </p>
            </div>
          )}
          <hr />
          <p className="p-3 cursor-pointer" onClick={toggleShowAns3}>
            + Can i book multiple tickets at once?
          </p>
          {ans3 && (
            <div className="bg-third text-primary">
              <p>
                Yes, you can book multiple tickets at once when purchasing bus
                tickets online. Most bus booking platforms and apps offer the
                option to book tickets for multiple passengers in a single
                transaction..{' '}
              </p>
            </div>
          )}
          <hr />
          <p className="p-3 cursor-pointer" onClick={toggleShowAns4}>
            + How far in Advance can i book a ticket?
          </p>
          {ans4 && (
            <div className="bg-third text-primary">
              <p>
                The ability to book bus tickets in advance depends on the bus
                operator and the platform you’re using. Typically, you can book
                tickets as far as 1 to 3 months in advance, but the exact time
                frame can vary:{' '}
              </p>
            </div>
          )}
          <hr />
          <p className="p-3 cursor-pointer" onClick={toggleShowAns5}>
            + What are the available payment options?
          </p>
          {ans5 && (
            <div className="bg-third text-primary">
              <p>
                When booking bus tickets online, there are various payment
                options available to ensure flexibility and convenience.{' '}
              </p>
            </div>
          )}
          <hr />
        </div>
      </div>
    </div>
  );
});

export default FAQs;
