import H1 from "./components/H1";
import H2 from "./components/H2";
import H5 from "./components/H5";
import NavBar from "./components/NavBar";
import Parth from "./Parth.jpg"
import Project from "./components/Project";
import MediumBlog from "./components/MediumBlog";
import Section from "./components/Section";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-950 dark:to-slate-800 text-black dark:text-white min-h-svh font-poppins">
      <NavBar />
      <div className='container mx-auto'>
        <Section id='about'>
          <div className='grid md:grid-cols-2'>
            <div className='md:order-first mt-12 md:mt-0 order-last flex flex-col justify-center align-middle'>
              <H1>Parth Rajesh Dedhia</H1>
              <H5 className="mt-2">Tinkerer | Developer</H5>
              <p className="mt-12">
                A passionate problem-solver who uses the latest technology to
                turn your business challenges into opportunities. I can bridge the gap
                between your business needs and the latest advancements in technology,
                like artificial intelligence (AI) and cloud computing.
              </p>
              <Contact />
            </div>
            <div className='flex flex-col justify-center align-middle'>
              <img src={Parth} alt='Parth Rajesh Dedhia' className='rounded-full mx-auto block md:w-2/3 w-1/2'></img>
            </div>
          </div>
        </Section>

        <Section id='projects'>
          <H2 className='mb-6'>Projects</H2>
          <div className='grid md:grid-cols-2 gap-6'>
            <Project
              title='Tax Automations for Dividends'
              summary="A secure, web-based platform automates tax calculations for millions of shareholder records, eliminating manual calculations and spreadsheet limitations. It ensures accurate tax reporting and reduces processing time, empowering businesses for seamless dividend distribution."
            />
            <Project
              title='International Transaction Compliance'
              summary="User-friendly web application automates Double Tax Avoidance Agreement (DTAA) filings for Indian businesses. It utilizes a secure database to pre-fill forms and minimize manual data entry, reducing filling time by 70-80%. This allows businesses to focus on core operations and expand their international reach with confidence."
            />
            <Project
              title="User's Gaze Detection System"
              summary="An Analytics tool utilizes eye-tracking technology to reveal where users focus their attention on webpages. It goes beyond traditional analytics, enabling data-driven design optimization to enhance user experience, improve conversion rates, and maximize website effectiveness."
            />
            <Project
              title='Strategic WhatsApp Marketing System'
              summary='Marketing solution leverages customer data and machine learning to identify high-propensity customers for targeted WhatsApp marketing campaigns. It ensures messages reach the most receptive audience and provides real-time analytics to track campaign performance and brand awareness impact. This empowers businesses to optimize marketing spend and achieve superior return on investment (ROI).'
            />
            <Project
              title="Automated Form Data Capturing"
              summary="This system automates data extraction from handwritten or printed forms, eliminating manual data entry and improving efficiency. Users upload scanned documents (images or PDFs), and the system intelligently parses the data for review and storage in a central database."
            />
          </div>
        </Section>

        <Section id='blogs'>
          <H2 className='mb-6'>Blogs</H2>
          <div className='flex flex-col gap-6'>
            <MediumBlog
              imageUrl='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*feME8KHgrReOTvBU'
              title='Building Face Recognition Model Under 30 Minutes'
              description='Fine-tuning VGG-16 to build Siamese Network trained on Triplet-Loss function for Face Recognition Tasks'
              url='https://towardsdatascience.com/building-face-recognition-model-under-30-minutes-2d1b0ef72fda'
            />
            <MediumBlog
              imageUrl='https://miro.medium.com/v2/resize:fit:828/format:webp/0*ybd7a-ZiYlOpkvWB'
              title='Implementing Capsule Network in TensorFlow'
              description='A guide to implement Capsule Network and Visualize its features'
              url='https://medium.com/towards-data-science/implementing-capsule-network-in-tensorflow-11e4cca5ecae'
            />
            <MediumBlog
              imageUrl='https://miro.medium.com/v2/resize:fit:828/format:webp/0*42RsY5qiSNeYDTse'
              title='Understanding Regions with CNN features (R-CNN)'
              description='The architectural details of R-CNN and the key takeaways from the model design and the paper'
              url='https://medium.com/towards-data-science/understanding-regions-with-cnn-features-r-cnn-ec69c15f8ea7'
            />
            <MediumBlog
              url='https://medium.com/towards-data-science/understanding-sppnet-for-object-detection-and-classification-682d6d2bdfb'
              imageUrl='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Dm5SH1rHazvgSeYM'
              title='Understanding SPPNet for Object Classification and Detection'
              description='SPPNet allows variable size input image to CNN and can be used for Classification and Object Detection'
            />
            <MediumBlog
              url='https://medium.com/towards-data-science/understanding-fast-rcnn-for-object-detection-7a1c3f63fc66'
              imageUrl='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*nX-LomXmIT-yRrENCb685g.jpeg'
              title='Understanding Fast-RCNN for Object Detection'
              description='The fast-RCNN paper highlights the drawbacks of SPPNet and RCNN, and build a relatively fast and accurate model'
            />
            <MediumBlog
              url='https://medium.com/towards-data-science/faster-r-cnn-a-step-towards-real-time-object-detection-98c186732a69'
              imageUrl='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*A3mhbsGA8JPSi4Ku'
              title='Faster R-CNN: A Step towards Real-Time object Detection'
              description='Faster R-CNN introduces a novel Region Proposal Network which makes it feasible to achieve real-time performance with the existing Fast-RCNN model'
            />
            <MediumBlog
              url='https://medium.com/towards-data-science/implementing-spatial-transformer-network-stn-in-tensorflow-bf0dc5055cd5'
              imageUrl='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Miy6NTAy61myk-Ut'
              title='Implementing Spatial Transformer Network (STN) in TensorFlow'
              description='Spatial Transformer Networks (STN) is a differentiable module that can be inserted between convolution layers to provide Equivariance to the image or features.'
            />
          </div>
        </Section>
        <footer className='text-center py-8 text-sm'>
          <a href='#' className='underline-animation'>Parth Rajesh Dedhia</a> © 2024
        </footer>
      </div>
    </div>
  )
}