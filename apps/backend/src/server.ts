import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";

const app = express();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api", limiter);

// CORS configuration
app.use(
  cors({
    origin: [
      process.env.PAYLOAD_PUBLIC_FRONTEND_URL || "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Mock API endpoints
app.get("/api/topics", (req, res) => {
  res.json({
    docs: [
      {
        id: "1",
        name: "الذكاء الاصطناعي",
        slug: "artificial-intelligence",
        description: "دراسة وتطوير الأنظمة الذكية",
      },
      {
        id: "2",
        name: "التعلم الآلي",
        slug: "machine-learning",
        description: "خوارزميات التعلم من البيانات",
      },
    ],
    totalDocs: 2,
    limit: 10,
    totalPages: 1,
    page: 1,
  });
});

app.get("/api/courses", (req, res) => {
  res.json({
    docs: [
      {
        id: "1",
        title: "دورة الذكاء الاصطناعي الشاملة",
        slug: "comprehensive-ai-course",
        summary: "دورة شاملة تغطي أساسيات الذكاء الاصطناعي وتطبيقاته العملية",
        level: "beginner",
        duration: 300,
        status: "published",
        publishedAt: new Date().toISOString(),
        topics: [
          { id: "1", name: "الذكاء الاصطناعي" },
          { id: "2", name: "التعلم الآلي" },
        ],
        cover: {
          url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
          alt: "دورة الذكاء الاصطناعي",
        },
      },
      {
        id: "2",
        title: "الأمن السيبراني المتقدم",
        slug: "advanced-cybersecurity",
        summary: "دورة متقدمة في الأمن السيبراني والحماية من التهديدات",
        level: "advanced",
        duration: 450,
        status: "published",
        publishedAt: new Date().toISOString(),
        topics: [{ id: "4", name: "الأمن السيبراني" }],
        cover: {
          url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
          alt: "الأمن السيبراني",
        },
      },
      {
        id: "3",
        title: "تطوير التطبيقات الذكية",
        slug: "smart-app-development",
        summary: "تعلم تطوير التطبيقات الذكية باستخدام الذكاء الاصطناعي",
        level: "intermediate",
        duration: 360,
        status: "published",
        publishedAt: new Date().toISOString(),
        topics: [
          { id: "5", name: "تطوير البرمجيات" },
          { id: "1", name: "الذكاء الاصطناعي" },
        ],
        cover: {
          url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
          alt: "تطوير التطبيقات",
        },
      },
      {
        id: "4",
        title: "البيانات الضخمة وتحليلها",
        slug: "big-data-analysis",
        summary: "تعلم كيفية تحليل البيانات الضخمة واستخراج الرؤى منها",
        level: "intermediate",
        duration: 420,
        status: "published",
        publishedAt: new Date().toISOString(),
        topics: [
          { id: "3", name: "البيانات الضخمة" },
          { id: "2", name: "التعلم الآلي" },
        ],
        cover: {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
          alt: "البيانات الضخمة",
        },
      },
      {
        id: "5",
        title: "الواقع الافتراضي والمعزز",
        slug: "vr-ar-development",
        summary: "تعلم تطوير تطبيقات الواقع الافتراضي والمعزز",
        level: "advanced",
        duration: 480,
        status: "published",
        publishedAt: new Date().toISOString(),
        topics: [
          { id: "6", name: "الواقع الافتراضي" },
          { id: "5", name: "تطوير البرمجيات" },
        ],
        cover: {
          url: "https://images.unsplash.com/photo-1592478411213-6153e4c4c5d0?w=800&h=400&fit=crop",
          alt: "الواقع الافتراضي",
        },
      },
    ],
    totalDocs: 5,
    limit: 10,
    totalPages: 1,
    page: 1,
  });
});

app.get("/api/news", (req, res) => {
  res.json({
    docs: [
      {
        id: "1",
        title: "إطلاق منصة دار الرفاه للدراسات والأبحاث",
        slug: "platform-launch",
        excerpt:
          "نحن فخورون بإطلاق منصتنا الجديدة للتعلم والبحث في مجال التكنولوجيا.",
        author: "فريق دار الرفاه",
        status: "published",
        publishedAt: new Date().toISOString(),
        category: { id: "1", name: "الذكاء الاصطناعي" },
        cover: {
          url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
          alt: "إطلاق المنصة",
        },
      },
      {
        id: "2",
        title: "أحدث التطورات في الذكاء الاصطناعي",
        slug: "latest-ai-developments",
        excerpt: "نظرة على أحدث التطورات والتقنيات في مجال الذكاء الاصطناعي.",
        author: "د. أحمد محمد",
        status: "published",
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        category: { id: "1", name: "الذكاء الاصطناعي" },
        cover: {
          url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
          alt: "الذكاء الاصطناعي",
        },
      },
      {
        id: "3",
        title: "مؤتمر الأمن السيبراني 2024",
        slug: "cybersecurity-conference-2024",
        excerpt: "انعقاد مؤتمر الأمن السيبراني السنوي في الرياض",
        author: "د. سارة أحمد",
        status: "published",
        publishedAt: new Date(Date.now() - 172800000).toISOString(),
        category: { id: "4", name: "الأمن السيبراني" },
        cover: {
          url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
          alt: "الأمن السيبراني",
        },
      },
      {
        id: "4",
        title: "تطبيقات الذكاء الاصطناعي في التعليم",
        slug: "ai-applications-education",
        excerpt: "كيف يغير الذكاء الاصطناعي مستقبل التعليم",
        author: "د. فاطمة علي",
        status: "published",
        publishedAt: new Date(Date.now() - 259200000).toISOString(),
        category: { id: "1", name: "الذكاء الاصطناعي" },
        cover: {
          url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
          alt: "التعليم الذكي",
        },
      },
    ],
    totalDocs: 4,
    limit: 10,
    totalPages: 1,
    page: 1,
  });
});

app.get("/api/papers", (req, res) => {
  res.json({
    docs: [
      {
        id: "1",
        title: "تطبيق التعلم الآلي في تحليل البيانات الطبية",
        slug: "ml-medical-data-analysis",
        abstract:
          "هذه الدراسة تقدم نهجاً جديداً لاستخدام التعلم الآلي في تحليل البيانات الطبية وتحسين التشخيص.",
        authors: [
          { name: "د. فاطمة أحمد", affiliation: "جامعة القاهرة" },
          { name: "د. محمد علي", affiliation: "معهد التكنولوجيا" },
        ],
        year: 2024,
        status: "published",
        publishedAt: new Date().toISOString(),
        topics: [{ id: "2", name: "التعلم الآلي" }],
        doi: "10.1000/example.doi",
      },
      {
        id: "2",
        title: "الأمن السيبراني في عصر الذكاء الاصطناعي",
        slug: "cybersecurity-ai-age",
        abstract:
          "دراسة شاملة حول تحديات الأمن السيبراني في ظل انتشار تقنيات الذكاء الاصطناعي.",
        authors: [{ name: "د. سارة محمود", affiliation: "جامعة الملك سعود" }],
        year: 2024,
        status: "published",
        publishedAt: new Date().toISOString(),
        topics: [
          { id: "4", name: "الأمن السيبراني" },
          { id: "1", name: "الذكاء الاصطناعي" },
        ],
        doi: "10.1000/example2.doi",
      },
      {
        id: "3",
        title: "تحليل البيانات الضخمة باستخدام تقنيات الذكاء الاصطناعي",
        slug: "big-data-ai-analysis",
        abstract:
          "بحث في كيفية استخدام تقنيات الذكاء الاصطناعي لتحليل البيانات الضخمة واستخراج الرؤى.",
        authors: [
          { name: "د. أحمد حسن", affiliation: "جامعة الإمارات" },
          { name: "د. نور الدين", affiliation: "معهد البحوث" },
        ],
        year: 2024,
        status: "published",
        publishedAt: new Date().toISOString(),
        topics: [
          { id: "3", name: "البيانات الضخمة" },
          { id: "1", name: "الذكاء الاصطناعي" },
        ],
        doi: "10.1000/example3.doi",
      },
      {
        id: "4",
        title: "تطبيقات الواقع الافتراضي في التعليم",
        slug: "vr-education-applications",
        abstract:
          "دراسة حول استخدام تقنيات الواقع الافتراضي والمعزز في تحسين تجربة التعلم.",
        authors: [
          { name: "د. خالد محمد", affiliation: "جامعة الملك عبدالعزيز" },
        ],
        year: 2023,
        status: "published",
        publishedAt: new Date(Date.now() - 31536000000).toISOString(),
        topics: [{ id: "6", name: "الواقع الافتراضي" }],
        doi: "10.1000/example4.doi",
      },
    ],
    totalDocs: 4,
    limit: 10,
    totalPages: 1,
    page: 1,
  });
});

// Serve static files
app.use("/media", express.static("src/uploads"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`🌐 API: http://localhost:${port}/api`);
});
