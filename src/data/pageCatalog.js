const defaultBlocks = (subject) => [
  {
    icon: '✦',
    title: `${subject} Overview`,
    text: `Comprehensive information and highlights related to ${subject.toLowerCase()} at Global Academy.`,
  },
  {
    icon: '◎',
    title: `${subject} Highlights`,
    text: `Key updates, achievements, and important details for students, parents, and visitors.`,
  },
  {
    icon: '❉',
    title: `${subject} Resources`,
    text: `Useful resources, contacts, and action points for this section of the academy website.`,
  },
]

export const pageCatalog = [
  {
    path: '/academic-program',
    title: 'Academic Program',
    category: 'Academics',
    summary: 'From Montessori Pre-Primary to Grade 10 (SEE), Global Academy offers a comprehensive English-medium curriculum designed to build critical thinkers and future leaders.',
    blocks: [
      {
        icon: '🌱',
        title: 'Pre-Primary (Montessori)',
        text: 'Our Montessori programme nurtures the natural curiosity of young learners through activity-based, child-centered learning. We focus on language development, numeracy, motor skills, and social skills in a safe, stimulating environment.',
      },
      {
        icon: '📖',
        title: 'Primary Level (Grades 1–5)',
        text: 'The primary curriculum follows the national framework with an English-medium emphasis. Core subjects include English, Nepali, Mathematics, Science, Social Studies, and Computer. We use interactive and project-based methods to build a strong academic foundation.',
      },
      {
        icon: '🔬',
        title: 'Lower Secondary (Grades 6–8)',
        text: 'Students explore a broader curriculum including Science, Mathematics, English, Nepali, Social Studies, Computer Science, and Optional Mathematics. Subject-specialist teachers lead classes, preparing students for the SEE pathway.',
      },
      {
        icon: '🎓',
        title: 'Secondary Level (Grades 9–10, SEE)',
        text: 'Our SEE preparation programme is rigorous and results-focused. Students choose from Science or Management streams. The programme includes structured revision sessions, model exams, and one-on-one academic counselling. Global Academy has consistently produced top SEE performers in Sudurpashchim Province.',
      },
      {
        icon: '🏆',
        title: 'Co-Curricular Activities',
        text: 'Beyond the classroom, students participate in sports, debate, cultural programmes, scouts, and science fairs. We believe well-rounded development is essential to producing capable citizens and future leaders.',
      },
      {
        icon: '💻',
        title: 'Technology Integration',
        text: 'All students from Grade 1 onwards have access to our modern computer laboratory. ICT is integrated across subjects, and senior students learn programming fundamentals, digital literacy, and internet safety.',
      },
    ],
  },

  {
    path: '/forms/bal-sanskar-registration-open-2081',
    title: 'Bal Sanskar Form Registration OPEN – 2081',
    category: 'Forms',
    summary: 'Registration details and event guidance for Bal Sanskar Camp 2081.',
    blocks: defaultBlocks('Bal Sanskar Registration'),
  },
  {
    path: '/staff/board-of-directors',
    title: 'Board of Directors',
    category: 'Staff',
    summary: 'Our visionary leadership team dedicated to the institution\'s growth and excellence.',
    layout: 'staff',
    blocks: [
      { name: 'Lavdev Ojha', role: 'Chairperson', bio: 'Leading Global Academy with vision and dedication since inception.', image: '/assets/lavdev-ojha.png' },
      { name: 'Surendra Raj Ojha', role: 'Founder Principal', bio: 'Pioneering educational excellence and institutional growth.', image: '/assets/surendra-ojha.png' },
      { name: 'Ashish Ojha', role: 'BOD Member', bio: 'Committed to fostering a modern learning environment.', image: '/assets/ashish-ojha.png' }
    ],
  },
  {
    path: '/staff/admin-account-staff',
    title: 'Administrative & Account Staff',
    category: 'Staff',
    summary: 'Meet our excellent admin & Account Staff',
    layout: 'staff',
    blocks: [
      { name: 'Hemanti Pandey', role: 'Accountant', image: '/assets/admin-hemanti.png' },
      { name: 'Sunita Bhandari', role: 'Office Assistant', image: '/assets/admin-sunita.png' },
      { name: 'Aarati Chaudhary', role: 'Office Assistant', image: '/assets/admin-aarati.png' }
    ],
  },
  {
    path: '/staff/vice-principal-incharges',
    title: 'Vice-Principal & Incharges',
    category: 'Staff',
    summary: 'Academic and administrative leadership guiding our daily educational activities.',
    layout: 'staff',
    blocks: [
      { name: 'Kamala Bhatt', role: 'Vice Principal', image: '/assets/vp-kamala.png' },
      { name: 'Devi Joshi', role: 'Secondary Level Incharge', image: '/assets/incharge-devi.png' },
      { name: 'Nirmala Bohara', role: 'Primary Incharge', image: '/assets/incharge-nirmala.png' }
    ],
  },
  {
    path: '/staff/head-of-department',
    title: 'Head of Department (HOD)',
    category: 'Staff',
    summary: 'Academic specialists leading their respective departments toward subject excellence.',
    layout: 'staff',
    blocks: [
      { name: 'Preeti Singh Chand', role: 'Science HOD', image: '/assets/hod-preeti.png' },
      { name: 'Purshotam Bhatt', role: 'Maths HOD', image: '/assets/hod-purshotam.png' }
    ],
  },
  {
    path: '/staff/teaching-faculty',
    title: 'Teaching Faculty',
    category: 'Staff',
    summary: 'Our team of experienced educators dedicated to student-focused learning.',
    layout: 'staff',
    blocks: [
      { name: 'Pushpa Bhatt Mainali', role: 'Economics Teacher', image: '/assets/faculty-pushpa.png' },
      { name: 'Indra Kaphle', role: 'Computer Teacher', image: '/assets/faculty-indra.png' },
      { name: 'Manish Jaishi', role: 'Computer Teacher', image: '/assets/faculty-manish.png' },
      { name: 'Shanti Thapa', role: 'Nepali Teacher', image: '/assets/faculty-shanti.png' },
      { name: 'Harish Bhandari', role: 'Maths Teacher', image: '/assets/faculty-harish.png' },
      { name: 'Rekha Bhatt', role: 'English Teacher', image: '/assets/faculty-rekha.png' },
      { name: 'Tara Rawat', role: 'Nepali Teacher', image: '/assets/faculty-tara.png' },
      { name: 'Anita Chand', role: 'Science Teacher', image: '/assets/faculty-anita.png' },
      { name: 'Yogesh Bhandari', role: 'Maths Teacher', image: '/assets/faculty-yogesh.png' },
      { name: 'Chandra Pal', role: 'Social Teacher', image: '/assets/faculty-chandra.png' },
      { name: 'Bimala Bhatt', role: 'GK Teacher', image: '/assets/faculty-bimala.png' },
      { name: 'Kiran Bohara', role: 'English Teacher', image: '/assets/faculty-kiran.png' },
      { name: 'Dipendra Raj Ojha', role: 'Computer Teacher', image: '/assets/faculty-dipendra.png' },
      { name: 'Tulsi Joshi', role: 'Maths Teacher', image: '/assets/faculty-tulsi.png' },
      { name: 'Dhaneshwari Ojha', role: 'English Teacher', image: '/assets/faculty-dhaneshwari.png' },
      { name: 'Uma Rokaya', role: 'Social Teacher', image: '/assets/faculty-uma.png' },
      { name: 'Geeta Ojha', role: 'Science Teacher', image: '/assets/faculty-geeta.png' },
      { name: 'Janaki Chand', role: 'Nepali Teacher', image: '/assets/faculty-janaki.png' },
      { name: 'Bhawana Bhatt', role: 'Primary Teacher', image: '/assets/faculty-bhawana.png' },
      { name: 'Saraswati Joshi', role: 'Pre Primary Teacher', image: '/assets/faculty-saraswati.png' },
      { name: 'Chadani Ojha Bhatt', role: 'Pre Primary Teacher', image: '/assets/faculty-chadani.png' },
      { name: 'Pushpa Ojha Joshi', role: 'Pre-Primary Teacher', image: '/assets/faculty-pushpao.png' },
      { name: 'Parmila Singh', role: 'Teaching Faculty', image: '/assets/faculty-parmila.png' }
    ],
  },
  {
    path: '/staff/non-teaching-staffs',
    title: 'Non-Teaching Staff',
    category: 'Staff',
    summary: 'The support team ensuring a safe and clean environment for all students.',
    layout: 'staff',
    blocks: [
      { name: 'Arjun Gurung', role: 'Security Guard', image: '/assets/staff-arjun.png' },
      { name: 'Keshav Joshi', role: 'Security Guard', image: '/assets/staff-keshav.png' },
      { name: 'Amrita Bohara', role: 'Supporting Staff', image: '/assets/staff-amrita.png' },
      { name: 'Manju Pant', role: 'Aya', image: '/assets/staff-manju.png' },
      { name: 'Chunni Lal Uraw', role: 'Sweeper', image: '/assets/staff-chunni.png' },
      { name: 'Parwati Gurung', role: 'Support Staff', image: '/assets/staff-parwati.png' },
      { name: 'Gauri Bhat', role: 'Support Staff', image: '/assets/staff-gauri.png' }
    ],
  },
  {
    path: '/who-we-are',
    title: 'Who We Are',
    category: 'About',
    summary: 'A journey of quality education, moral values, and student excellence since 2005.',
    layout: 'editorial',
    image: '/assets/school.png',
    content: `
      Global Academy, situated in the heart of town, was established in 2005 A.D. with a motto of quality education. 
      It is a renowned co-educational secondary English medium school with a team of dynamic and well-experienced teaching faculties. 
      We have been offering outstanding education for more than one and a half decade.

      Our large buildings are accompanied by a big auditorium, well-furnished classrooms, and well-equipped necessities that attract and 
      enhance the students in every aspect of life. The school has gained a good name and fame for its records in academic, 
      co-curricular, and extra-curricular events. 

      The innovative, demonstrative, and interactive atmosphere, combined with humbleness and morality, offers a creative platform 
      for the preparation of successful and capable youths for nation-building and civilization.
    `
  },
]
