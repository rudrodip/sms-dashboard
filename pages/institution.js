import Admin from "@/layouts/Admin"
import { useRef } from "react"

const Institution = () => {
  const infoRef = useRef(1)
  const infoScroll = () => infoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("/bg/rc.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Rajshahi College</h1>
            <p className="mb-5 text-white">It stood consecutively 4 times as the best educational institution of the country at college level organized by the Ministry of Education, and 3 times First in the ranking of National University all over Bangladesh. On behalf of Rajshahi College, Principal hearty congratulates and extend his best wishes to all of its well-wishers.</p>
            <button className="btn btn-info" onClick={infoScroll}>Read More</button>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-5xl text-center m-3 p-1">এক নজরে রাজশাহী কলেজ</h1>
      <div className="overflow-x-auto max-w-screen-2xl" ref={infoRef}>
        <table className="table-auto w-full bg-gray-900">
          <tbody className="divide-y divide-gray-600">

            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">প্রতিষ্ঠা</th>
              <td className="w-2/3 px-6 py-4 ">১৮৭৩ খ্রিষ্টাব্দ</td>
            </tr>

            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">জমির পরিমান</th>
              <td className="w-1/3 px-6 py-4 ">৩৫ (পঁয়ত্রিশ) একর</td>
            </tr>

            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">অবস্থান</th>
              <td className="w-1/3 px-6 py-4 ">দক্ষিণে প্রমত্তা পদ্মা ও হযরত শাহ্ মখদুম রূপোশ (রহঃ) এর দরগাহ্, পূর্বে রাজশাহীর প্রাণকেন্দ্র সাহেব বাজার, ‍উত্তরে রাজারহাতা-হেতেম খাঁ আবাসিক এলাকা এবং পশ্চিমে হোসেনীগঞ্জ আবাসিক এলাকা</td>
            </tr>

            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">পোস্ট কোড</th>
              <td className="w-1/3 px-6 py-4 ">৬১০০</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">অনুষদ</th>
              <td className="w-1/3 px-6 py-4 ">৪</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">বিভাগ সংখ্যা</th>
              <td className="w-1/3 px-6 py-4 ">২৪ (কলা-৮, সামাজিক বিজ্ঞান-৪, বিজ্ঞান-৮, ব্যবসায় শিক্ষা-৪)</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">উচ্চ মাধ্যমিক</th>
              <td className="w-1/3 px-6 py-4 ">বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">বিভাগসমূহ</th>
              <td className="w-1/3 px-6 py-4 ">বাংলা, ইংরেজি, আরবি ও ইসলামী শিক্ষা, সংস্কৃত, উর্দু, ইতিহাস, ইসলামের ইতিহাস ও সংস্কৃতি, দর্শন, রাষ্ট্রবিজ্ঞান, সমাজবিজ্ঞান, সমাজকর্ম, অর্থনীতি, পদার্থবিজ্ঞান, রসায়নবিদ্যা, গণিত, উদ্ভিদবিদ্যা, প্রাণিবিদ্যা, ভূগোল ও পরিবেশ বিদ্যা, মনোবিজ্ঞান, পরিসংখ্যান,মার্কেটিং, ফিন্যান্স ও ব্যাংকিং, হিসাববিজ্ঞান ও ব্যবস্থাপনা</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">প্রদত্ত ডিগ্রিসমূহ</th>
              <td className="w-1/3 px-6 py-4 ">এইচএসসি, বিএ (পাস), বিএসএস (পাস), বিএসসি (পাস), বিবিএস (পাস), বিএ (সম্মান), বিএসএস (সম্মান), বিএসসি (সম্মান), বিবিএস (সম্মান), বিবিএ (সম্মান), এমএ, এমএসএস, এমএসসি, এমবিএস ও এমবিএ</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">ছা্ত্র-ছাত্রীর সংখ্যা</th>
              <td className="w-1/3 px-6 py-4 ">প্রায় ২৬,০০০ (ছাব্বিশ হাজার)</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">প্রদর্শক</th>
              <td className="w-1/3 px-6 py-4 ">৮</td>
            </tr>

            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">শরীরচর্চা শিক্ষক</th>
              <td className="w-1/3 px-6 py-4 ">১</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">গন্থাগারিক</th>
              <td className="w-1/3 px-6 py-4 ">১</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">সহকারি গ্রন্থাগারিক কাম ক্যাটালগার</th>
              <td className="w-1/3 px-6 py-4 ">১</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">বুক সর্টার</th>
              <td className="w-1/3 px-6 py-4 ">২</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">সহায়ক সুবিধাদি</th>
              <td className="w-1/3 px-6 py-4 ">বিভাগীয় সেমিনার, অডিটোরিয়াম ও জিমনেসিয়াম</td>
            </tr>
            <tr className="bg-gray-800 rounded-md">
              <th className="w-1/3 px-6 py-4 ">অন্যান্য</th>
              <td className="w-1/3 px-6 py-4 ">প্রশাসনিক ভবন-১, একাডেমিক ভবন-১১, লাইব্রেরী ভবন-১, শিক্ষক মিলনায়তন-১, অধ্যক্ষের বাসভবন-১, টিচার্স কোয়ার্টার-২, ছাত্র হোস্টেল-২, ছাত্রী হোস্টেল-২, বিএনসিসি ভবন-১, রোভার ডেন-১, ছাত্র কমনরুম-১, ছাত্রী কমনরুম-১, অডিটোরিয়াম-১, সভাকক্ষ-১, পরীক্ষা নিয়ন্ত্রণ কক্ষ-১, কেন্দ্রীয় মসজিদ-১, শহীদ মিনার-১, বোটানিক্যাল গার্ডেন-১, ডিমনেসিয়াম-১, স্বাস্থ্যকেন্দ্র-১, রূপালী ব্যাংক বুথ-১, মিউজিয়াম (ঐতিহ্যে রাজশাহী কলেজ), গ্যাস প্লান্ট-১, সাইকেল গ্যারেজ-১, খেলার মাঠ-১, কলেজ ক্যান্টিন-১, হোস্টেল ক্যান্টিন-১, ভাণ্ডার কক্ষ-১, ছাত্র সংসদ কক্ষ-১, পুকুর ও ফুলের বাগান-১</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Institution
Institution.layout = Admin
