import type { Metadata } from 'next'
import { ProjectStatusCard } from './_components/expandable-card'

export const metadata: Metadata = {
  title: 'Expandable Card',
  description: 'Playground motion dev',
}

export default function ExpandableCardPage() {
  return (
    <div className="flex flex-1 justify-center items-center py-40">
      <ProjectStatusCard
        title="UI Component Library"
        progress={75}
        dueDate="Jan 15, 2024"
        contributors={[{ name: 'Sarah' }, { name: 'Mike' }, { name: 'Alex' }]}
        tasks={[
          { title: 'Update Button Components', completed: true },
          { title: 'Add Dark Mode Support', completed: true },
          { title: 'Write Documentation', completed: false },
        ]}
        githubStars={128}
        openIssues={5}
      />
    </div>
  )
}
