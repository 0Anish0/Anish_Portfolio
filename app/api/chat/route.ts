import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chatSchema = z.object({
  message: z.string().min(1, 'Message is required'),
  conversationHistory: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })).optional(),
});

// Function definitions for the AI assistant
const functions = [
  {
    name: 'get_portfolio_info',
    description: 'Get information about Anish Kumar Pandey\'s portfolio, skills, projects, or experience',
    parameters: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          enum: ['skills', 'projects', 'experience', 'contact', 'about'],
          description: 'The category of information requested',
        },
        specific_query: {
          type: 'string',
          description: 'Specific details about what the user wants to know',
        },
      },
      required: ['category'],
    },
  },
  {
    name: 'schedule_meeting',
    description: 'Help user schedule a meeting or consultation',
    parameters: {
      type: 'object',
      properties: {
        purpose: {
          type: 'string',
          description: 'Purpose of the meeting',
        },
        preferred_time: {
          type: 'string',
          description: 'User\'s preferred time for the meeting',
        },
      },
      required: ['purpose'],
    },
  },
];

const portfolioData = {
  skills: {
    ml: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'],
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'FastAPI'],
    cloud: ['AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD'],
  },
  projects: [
    {
      name: 'AI-Powered Chatbot Platform',
      description: 'Intelligent conversational AI system with natural language processing capabilities',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
    },
    {
      name: 'E-Commerce Analytics Dashboard',
      description: 'Real-time analytics dashboard for e-commerce businesses with predictive insights',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    },
    {
      name: 'Computer Vision Image Classifier',
      description: 'Deep learning model for image classification with 95% accuracy',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'Flask', 'Docker'],
    },
  ],
  experience: [
    {
      title: 'Senior ML Engineer',
      company: 'TechCorp Solutions',
      period: '2023 - Present',
      description: 'Leading machine learning initiatives and developing AI-powered solutions',
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2022 - 2023',
      description: 'Developed and maintained web applications using modern technologies',
    },
  ],
  contact: {
    email: 'anishpandey4576@gmail.com',
    phone: '+91 9852208695',
    location: 'Noida, Uttar Pradesh (NCR), India',
    linkedin: 'https://www.linkedin.com/in/anish-kumar-pandey-57390b190/',
    github: 'https://github.com/0Anish0',
  },
  about: 'Anish Kumar Pandey is a passionate ML Engineer and Full-Stack Developer with over 3 years of experience in creating innovative solutions. Based in Noida, India, he specializes in building end-to-end applications that leverage AI to solve real-world problems.',
};

function handlePortfolioInfo(category: string, specificQuery?: string) {
  switch (category) {
    case 'skills':
      return `Here are my technical skills:

**Machine Learning & AI:**
${portfolioData.skills.ml.join(', ')}

**Frontend Development:**
${portfolioData.skills.frontend.join(', ')}

**Backend Development:**
${portfolioData.skills.backend.join(', ')}

**Cloud & DevOps:**
${portfolioData.skills.cloud.join(', ')}

I have 3+ years of experience with these technologies and am always learning new ones!`;

    case 'projects':
      return `Here are some of my featured projects:

${portfolioData.projects.map((project, index) => `
**${index + 1}. ${project.name}**
${project.description}
Technologies: ${project.technologies.join(', ')}
`).join('\n')}

Would you like to know more about any specific project?`;

    case 'experience':
      return `Here's my professional experience:

${portfolioData.experience.map((exp, index) => `
**${index + 1}. ${exp.title}** at ${exp.company}
${exp.period}
${exp.description}
`).join('\n')}

I'm currently available for new opportunities and freelance projects!`;

    case 'contact':
      return `Here's how you can reach me:

📧 **Email:** ${portfolioData.contact.email}
📱 **Phone:** ${portfolioData.contact.phone}
📍 **Location:** ${portfolioData.contact.location}
💼 **LinkedIn:** ${portfolioData.contact.linkedin}
🐙 **GitHub:** ${portfolioData.contact.github}

I typically respond within 24 hours. Feel free to reach out for project discussions, collaborations, or just to say hi!`;

    case 'about':
      return portfolioData.about;

    default:
      return 'I can help you with information about my skills, projects, experience, contact details, or general background. What would you like to know?';
  }
}

function handleScheduleMeeting(purpose: string, preferredTime?: string) {
  return `I'd be happy to schedule a meeting with you for ${purpose}!

${preferredTime ? `I noted your preferred time: ${preferredTime}` : ''}

To schedule our meeting, please:
1. Send me an email at anishpandey4576@gmail.com
2. Include the meeting purpose and your preferred time slots
3. I'll send you a calendar invite with meeting details

Alternatively, you can reach out via LinkedIn or use the contact form on my website. I'm flexible with timing and can accommodate different time zones.

Looking forward to our conversation!`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, conversationHistory = [] } = chatSchema.parse(body);

    const systemPrompt = `You are an AI assistant for Anish Kumar Pandey's portfolio website. You are knowledgeable, helpful, and professional. 

Key information about Anish:
- ML Engineer and Full-Stack Developer
- Based in Noida, Uttar Pradesh (NCR), India
- 3+ years of experience
- Specializes in Python, TensorFlow, React, Node.js
- Available for freelance projects and full-time opportunities
- Email: anishpandey4576@gmail.com
- Phone: +91 9852208695

Guidelines:
1. Be conversational and friendly
2. Provide accurate information about Anish's skills and experience
3. Encourage users to contact Anish for projects or collaborations
4. Use the available functions when users ask for specific information
5. If you don't know something, suggest they contact Anish directly
6. Keep responses concise but informative`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: message },
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages as any,
      functions,
      function_call: 'auto',
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = completion.choices[0].message;

    if (assistantMessage.function_call) {
      const functionName = assistantMessage.function_call.name;
      const functionArgs = JSON.parse(assistantMessage.function_call.arguments);

      let functionResult = '';

      if (functionName === 'get_portfolio_info') {
        functionResult = handlePortfolioInfo(functionArgs.category, functionArgs.specific_query);
      } else if (functionName === 'schedule_meeting') {
        functionResult = handleScheduleMeeting(functionArgs.purpose, functionArgs.preferred_time);
      }

      return NextResponse.json({
        message: functionResult,
        type: 'function_response',
        function_used: functionName,
      });
    }

    return NextResponse.json({
      message: assistantMessage.content,
      type: 'text',
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        message: "I'm sorry, I'm having trouble processing your request right now. Please try again or contact Anish directly at anishpandey4576@gmail.com.",
        type: 'error'
      },
      { status: 500 }
    );
  }
}