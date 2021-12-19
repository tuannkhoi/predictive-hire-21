import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// Products
import ChatInterview from './pages/Products/ChatInterview';
import VideoInterview from './pages/Products/VideoInterview'
import GroupInterview from './pages/Products/GroupInterview';
import CandidateFeedback from './pages/Products/CandidateFeedback';
import CandidateInsights from './pages/Products/CandidateInsights';
import PeopleInsights from './pages/Products/PeopleInsights';
import Integration from './pages/Products/Integration';
// Platform
import CandidateExperience from './pages/Platform/CandidateExperience';
import EliminatingBias from './pages/Platform/EliminatingBias';
import SpeedToHire from './pages/Platform/SpeedToHire';
// WhyUs
import TheScience from './pages/WhyUs/TheScience';
import SuccessfulCustomers from './pages/WhyUs/SuccessfulCustomers';
import CaseStudy from './pages/WhyUs/CaseStudy';
import AwardWinning from './pages/WhyUs/AwardWinning';
import FeaturedIn from './pages/WhyUs/FeaturedIn';
// Resources
import SavingCalculator from './pages/Resources/SavingCalculator';
import UltimateGuide from './pages/Resources/UltimateGuide';
import DEIReport from './pages/Resources/DEIReport';
import FaireBook from './pages/Resources/FaireBook';
import InclusioneBook from './pages/Resources/InclusioneBook';
import ExperienceeBook from './pages/Resources/ExperienceeBook';
import RetaileBook from './pages/Resources/RetaileBook';
import AutomationeBook from './pages/Resources/AutomationeBook';
import OtherResources from './pages/Resources/OtherResources';
// Blog
import CandidateExperienceWithAI from './pages/Blog/CandidateExperienceWithAI';
import ConversationalAI from './pages/Blog/ConversationalAI';
import InThePress from './pages/Blog/InThePress';
// Contact
import PhoneAndEmail from './pages/Contact/PhoneAndEmail';
import CarrierPigeon from './pages/Contact/CarrierPigeon';
import HogwartsOwl from './pages/Contact/HogwartsOwl';
// 404 error not found
import NotFound from './pages/NotFound/NotFound';


export default function RoutesComponent() {
	return (
			<Routes>
				{/* Home */}
				<Route path='/' element={<Home />} />
				{/* Products */}
				<Route path='/chat-interview' element={<ChatInterview />} />
				<Route path='/video-interview' element={<VideoInterview />} />
				<Route path='/group-interview' element={<GroupInterview />} />
				<Route path='/candidate-feedback' element={<CandidateFeedback />} />
				<Route path='/candidate-insights' element={<CandidateInsights />} />
				<Route path='/people-insights' element={<PeopleInsights />} />
				<Route path='/integration' element={<Integration />} />
				{/* Platform */}
				<Route path='/candidate-experience' element={<CandidateExperience />} />
				<Route path='/eliminating-bias' element={<EliminatingBias />} />
				<Route path='/speed-to-hire' element={<SpeedToHire />} />
				{/* WhyUs */}
				<Route path='/the-science' element={<TheScience />} />
				<Route path='/successful-customers' element={<SuccessfulCustomers />} />
				<Route path='/case-study' element={<CaseStudy />} />
				<Route path='/award-winning' element={<AwardWinning />} />
				<Route path='/featured-in' element={<FeaturedIn />} />
				{/* Resources */}
				<Route path='/saving-calculator' element={<SavingCalculator />} />
				<Route path='/ultimate-guide' element={<UltimateGuide />} />
				<Route path='/dei-report' element={<DEIReport />} />
				<Route path='/fair-ebook' element={<FaireBook />} />
				<Route path='/inclusion-ebook' element={<InclusioneBook />} />
				<Route path='/experience-ebook' element={<ExperienceeBook />} />
				<Route path='/retail-ebook' element={<RetaileBook />} />
				<Route path='/automation-ebook' element={<AutomationeBook />} />
				<Route path='/other-resources' element={<OtherResources />} />
				{/* Blog */}
				<Route path='/candidate-experience-with-ai' element={<CandidateExperienceWithAI />} />
				<Route path='/conversational-ai' element={<ConversationalAI />} />
				<Route path='/in-the-press' element={<InThePress />} />
				{/* Contact */}
				<Route path='/phone-and-email' element={<PhoneAndEmail />} />
				<Route path='/carrier-pigeon' element={<CarrierPigeon />} />
				<Route path='/hogwarts-owl' element={<HogwartsOwl />} />
				{/* 404 error not found */}
				<Route path='/*' element={<NotFound />} />
			</Routes>
	)
}