import { FC } from 'react'
import Badge from '@/components/Badge/Badge'
import MyImage from '../MyImage'
import AddSubscriberForm from '../AddSubscriberForm'

export interface SectionSubscribe2Props {
	className?: string
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = '' }) => {
	return (
		<div
			className={`nc-SectionSubscribe2 relative flex flex-col items-center lg:flex-row ${className}`}
		>
			<div className="mb-14 flex-shrink-0 lg:mb-0 lg:me-10 lg:w-2/5">
				<span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
					YENİ YAZILARDAN HABERDAR OL
				</span>

				<h2 className="mt-3 text-4xl font-semibold">
					Yeni Yazılardan Haberdar Ol 🎉
				</h2>

				<span className="mt-6 block text-neutral-500 dark:text-neutral-400">
					Yeni içerikler yayınlandığında ilk sen haberdar ol. Blogdaki güncel yazıları ve öne çıkan konuları kaçırma.
				</span>

				<ul className="mt-10 space-y-5">
					<li className="flex items-center space-x-4 rtl:space-x-reverse">
						<Badge name="01" color="red" />
						<span className="font-medium text-neutral-700 dark:text-neutral-300">
							Yeni içerikleri takip et.
						</span>
					</li>

					<li className="flex items-center space-x-4 rtl:space-x-reverse">
						<Badge name="02" color="indigo" />
						<span className="font-medium text-neutral-700 dark:text-neutral-300">
							Blogdaki öne çıkan yazıları keşfet.
						</span>
					</li>
				</ul>

				<AddSubscriberForm className="relative mt-10 max-w-sm" />
			</div>

			<div className="flex-grow">
				<MyImage
					alt="Bültene katıl"
					sizes="(max-width: 768px) 100vw, 50vw"
					src="/images/SVG-subcribe2.png"
					width={1450}
					height={638}
				/>
			</div>
		</div>
	)
}

export default SectionSubscribe2