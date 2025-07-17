import Hero from './screens/Hero'
import SearchSection from './screens/SearchSection'
import RequirementsSection from './screens/RequirementsSection'
import MomentsSection from './screens/MomentsSection'
import LoginPrompt from './screens/LoginPrompt'
import FaqSection from './screens/FaqSection'

export default function App() {
  return (
    <div>
      <Hero />
      <SearchSection />
      <RequirementsSection />
      <MomentsSection />
      <LoginPrompt />
      <FaqSection />
    </div>
  )
}
