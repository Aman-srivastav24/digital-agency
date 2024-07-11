
import { MdOutlineAdminPanelSettings , MdDeveloperMode , MdBusiness ,MdAnalytics ,MdCloudSync ,MdOutlineContacts} from "react-icons/md";
const features = [
  {
    name: ' Salesforce Administration',
    description:
      ' Master the essentials of Salesforce setup, configuration, and maintenance to optimize business processes',
    icon: MdOutlineAdminPanelSettings,
  },
  {
    name: 'Salesforce Development',
    description:
      ' Dive into advanced Apex programming, Visualforce, Lightning components, and Salesforce DX for robust application development',
    icon: MdDeveloperMode,
  },
  {
    name: 'Salesforce Business Analysis',
    description:
      'Acquire skills in requirement gathering, process mapping, and stakeholder management to deliver effective Salesforce solutions.',
    icon: MdBusiness,
  },
  {
    name: 'Salesforce Data Analysis',
    description:
      ' Harness the power of Salesforce data with advancedreporting, dashboard creation, and data migration techniques',
    icon: MdAnalytics,
  },
  {
    name: ' Salesforce Sales and Service Cloud',
    description:
      'Learn to leverage Salesforce CRM tools for effective sales management and customer service delivery',
    icon: MdCloudSync,
  },
  {
    name: ' Salesforce Consulting',
    description:
      'Gain expertise in solution architecture, implementation strategies, and client advisory to drive business success',
    icon: MdOutlineContacts,
  },
]

export default function SalesForceFeatures() {
  return (
    <div className="dark:bg-gray-900 bg-gray-200 rounded-lg sm:py-32 mt-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-in">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p className=" text-3xl font-bold tracking-tight dark:text-gray-300 sm:text-4xl" data-aos="fade-in"> 
          Why Choose Cloversal for Salesforce Training?

          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
          Cloversal offers a wide range of specialized Salesforce training courses designed to cater to
          diverse career goals and skill levels:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 dark:text-gray-200" >
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
