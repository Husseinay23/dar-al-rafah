import { getPayload } from "payload";
import config from "./payload.config";

const seed = async () => {
  const payload = await getPayload({ config });

  try {
    console.log("🌱 Starting seed process...");

    // Create topics
    const topics = await Promise.all([
      payload.create({
        collection: "topics",
        data: {
          name: {
            ar: "الذكاء الاصطناعي",
            en: "Artificial Intelligence",
            fr: "Intelligence Artificielle",
          },
          slug: "artificial-intelligence",
          description: {
            ar: "دراسة وتطوير الأنظمة الذكية",
            en: "Study and development of intelligent systems",
            fr: "Étude et développement de systèmes intelligents",
          },
        },
      }),
      payload.create({
        collection: "topics",
        data: {
          name: {
            ar: "التعلم الآلي",
            en: "Machine Learning",
            fr: "Apprentissage Automatique",
          },
          slug: "machine-learning",
          description: {
            ar: "خوارزميات التعلم من البيانات",
            en: "Algorithms that learn from data",
            fr: "Algorithmes qui apprennent à partir de données",
          },
        },
      }),
      payload.create({
        collection: "topics",
        data: {
          name: {
            ar: "البيانات الضخمة",
            en: "Big Data",
            fr: "Big Data",
          },
          slug: "big-data",
          description: {
            ar: "تحليل ومعالجة البيانات الكبيرة",
            en: "Analysis and processing of large datasets",
            fr: "Analyse et traitement de grands ensembles de données",
          },
        },
      }),
      payload.create({
        collection: "topics",
        data: {
          name: {
            ar: "الأمن السيبراني",
            en: "Cybersecurity",
            fr: "Cybersécurité",
          },
          slug: "cybersecurity",
          description: {
            ar: "حماية الأنظمة والشبكات",
            en: "Protection of systems and networks",
            fr: "Protection des systèmes et réseaux",
          },
        },
      }),
      payload.create({
        collection: "topics",
        data: {
          name: {
            ar: "تطوير البرمجيات",
            en: "Software Development",
            fr: "Développement Logiciel",
          },
          slug: "software-development",
          description: {
            ar: "تصميم وبناء التطبيقات البرمجية",
            en: "Design and building of software applications",
            fr: "Conception et construction d'applications logicielles",
          },
        },
      }),
      payload.create({
        collection: "topics",
        data: {
          name: {
            ar: "الواقع الافتراضي",
            en: "Virtual Reality",
            fr: "Réalité Virtuelle",
          },
          slug: "virtual-reality",
          description: {
            ar: "تقنيات الواقع الافتراضي والمعزز",
            en: "Virtual and augmented reality technologies",
            fr: "Technologies de réalité virtuelle et augmentée",
          },
        },
      }),
    ]);

    console.log("✅ Topics created");

    // Create sample media (placeholder)
    const media = await Promise.all([
      payload.create({
        collection: "media",
        data: {
          filename: "ai-course-cover.jpg",
          alt: {
            ar: "صورة غلاف دورة الذكاء الاصطناعي",
            en: "AI Course Cover Image",
            fr: "Image de couverture du cours IA",
          },
        },
      }),
      payload.create({
        collection: "media",
        data: {
          filename: "research-paper.pdf",
          alt: {
            ar: "ورقة بحثية في التعلم الآلي",
            en: "Machine Learning Research Paper",
            fr: "Article de recherche en apprentissage automatique",
          },
        },
      }),
    ]);

    console.log("✅ Media created");

    // Create lessons
    const lessons = await Promise.all([
      payload.create({
        collection: "lessons",
        data: {
          title: {
            ar: "مقدمة في الذكاء الاصطناعي",
            en: "Introduction to Artificial Intelligence",
            fr: "Introduction à l'Intelligence Artificielle",
          },
          slug: "intro-to-ai",
          body: {
            ar: "هذه الدورة تقدم مقدمة شاملة للذكاء الاصطناعي وتطبيقاته المختلفة.",
            en: "This course provides a comprehensive introduction to artificial intelligence and its various applications.",
            fr: "Ce cours fournit une introduction complète à l'intelligence artificielle et ses diverses applications.",
          },
          videoUrl: "https://www.youtube.com/watch?v=example1",
          duration: 45,
          order: 1,
          resources: [
            {
              label: {
                ar: "ملخص الدرس",
                en: "Lesson Summary",
                fr: "Résumé de la leçon",
              },
              url: "/resources/ai-lesson-1.pdf",
              type: "pdf",
            },
          ],
        },
      }),
      payload.create({
        collection: "lessons",
        data: {
          title: {
            ar: "خوارزميات التعلم الآلي",
            en: "Machine Learning Algorithms",
            fr: "Algorithmes d'Apprentissage Automatique",
          },
          slug: "ml-algorithms",
          body: {
            ar: "تعلم الخوارزميات الأساسية في التعلم الآلي وكيفية تطبيقها.",
            en: "Learn the fundamental algorithms in machine learning and how to apply them.",
            fr: "Apprenez les algorithmes fondamentaux en apprentissage automatique et comment les appliquer.",
          },
          videoUrl: "https://www.youtube.com/watch?v=example2",
          duration: 60,
          order: 2,
          resources: [
            {
              label: {
                ar: "كود المثال",
                en: "Example Code",
                fr: "Code d'exemple",
              },
              url: "/resources/ml-code-examples.zip",
              type: "link",
            },
          ],
        },
      }),
    ]);

    console.log("✅ Lessons created");

    // Create courses
    const courses = await Promise.all([
      payload.create({
        collection: "courses",
        data: {
          title: {
            ar: "دورة الذكاء الاصطناعي الشاملة",
            en: "Comprehensive AI Course",
            fr: "Cours Complet d'IA",
          },
          slug: "comprehensive-ai-course",
          summary: {
            ar: "دورة شاملة تغطي أساسيات الذكاء الاصطناعي وتطبيقاته العملية",
            en: "A comprehensive course covering AI fundamentals and practical applications",
            fr: "Un cours complet couvrant les fondamentaux de l'IA et ses applications pratiques",
          },
          description: {
            ar: "هذه الدورة مصممة للمبتدئين والمتوسطين الذين يريدون تعلم الذكاء الاصطناعي من الصفر.",
            en: "This course is designed for beginners and intermediates who want to learn AI from scratch.",
            fr: "Ce cours est conçu pour les débutants et intermédiaires qui veulent apprendre l'IA depuis le début.",
          },
          cover: media[0].id,
          level: "beginner",
          topics: [topics[0].id, topics[1].id],
          duration: 300,
          lessons: [lessons[0].id, lessons[1].id],
          status: "published",
          publishedAt: new Date().toISOString(),
        },
      }),
      payload.create({
        collection: "courses",
        data: {
          title: {
            ar: "الأمن السيبراني المتقدم",
            en: "Advanced Cybersecurity",
            fr: "Cybersécurité Avancée",
          },
          slug: "advanced-cybersecurity",
          summary: {
            ar: "دورة متقدمة في الأمن السيبراني والحماية من التهديدات",
            en: "Advanced course in cybersecurity and threat protection",
            fr: "Cours avancé en cybersécurité et protection contre les menaces",
          },
          description: {
            ar: "تعلم تقنيات الأمن السيبراني المتقدمة وكيفية حماية الأنظمة.",
            en: "Learn advanced cybersecurity techniques and how to protect systems.",
            fr: "Apprenez les techniques avancées de cybersécurité et comment protéger les systèmes.",
          },
          level: "advanced",
          topics: [topics[3].id],
          duration: 450,
          status: "published",
          publishedAt: new Date().toISOString(),
        },
      }),
    ]);

    console.log("✅ Courses created");

    // Create news
    const news = await Promise.all([
      payload.create({
        collection: "news",
        data: {
          title: {
            ar: "إطلاق منصة دار الرفاه للدراسات والأبحاث",
            en: "Launch of Dar Al Rafah Research Platform",
            fr: "Lancement de la Plateforme de Recherche Dar Al Rafah",
          },
          slug: "platform-launch",
          excerpt: {
            ar: "نحن فخورون بإطلاق منصتنا الجديدة للتعلم والبحث في مجال التكنولوجيا.",
            en: "We are proud to launch our new platform for learning and research in technology.",
            fr: "Nous sommes fiers de lancer notre nouvelle plateforme d'apprentissage et de recherche en technologie.",
          },
          body: {
            ar: "منصة دار الرفاه تهدف إلى تقديم محتوى تعليمي عالي الجودة باللغة العربية مع دعم اللغات الأخرى.",
            en: "Dar Al Rafah platform aims to provide high-quality educational content in Arabic with support for other languages.",
            fr: "La plateforme Dar Al Rafah vise à fournir du contenu éducatif de haute qualité en arabe avec support d'autres langues.",
          },
          category: topics[0].id,
          cover: media[0].id,
          author: "فريق دار الرفاه",
          status: "published",
          publishedAt: new Date().toISOString(),
        },
      }),
      payload.create({
        collection: "news",
        data: {
          title: {
            ar: "أحدث التطورات في الذكاء الاصطناعي",
            en: "Latest Developments in AI",
            fr: "Derniers Développements en IA",
          },
          slug: "latest-ai-developments",
          excerpt: {
            ar: "نظرة على أحدث التطورات والتقنيات في مجال الذكاء الاصطناعي.",
            en: "A look at the latest developments and technologies in artificial intelligence.",
            fr: "Un aperçu des derniers développements et technologies en intelligence artificielle.",
          },
          body: {
            ar: "في هذا المقال، نستعرض أهم التطورات الحديثة في الذكاء الاصطناعي وتأثيرها على مختلف المجالات.",
            en: "In this article, we review the most important recent developments in AI and their impact on various fields.",
            fr: "Dans cet article, nous passons en revue les développements récents les plus importants en IA et leur impact sur divers domaines.",
          },
          category: topics[0].id,
          author: "د. أحمد محمد",
          status: "published",
          publishedAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        },
      }),
    ]);

    console.log("✅ News created");

    // Create papers
    const papers = await Promise.all([
      payload.create({
        collection: "papers",
        data: {
          title: {
            ar: "تطبيق التعلم الآلي في تحليل البيانات الطبية",
            en: "Applying Machine Learning in Medical Data Analysis",
            fr: "Application de l'Apprentissage Automatique dans l'Analyse de Données Médicales",
          },
          slug: "ml-medical-data-analysis",
          abstract: {
            ar: "هذه الدراسة تقدم نهجاً جديداً لاستخدام التعلم الآلي في تحليل البيانات الطبية وتحسين التشخيص.",
            en: "This study presents a new approach to using machine learning in medical data analysis and improving diagnosis.",
            fr: "Cette étude présente une nouvelle approche pour utiliser l'apprentissage automatique dans l'analyse de données médicales et améliorer le diagnostic.",
          },
          authors: [
            { name: "د. فاطمة أحمد", affiliation: "جامعة القاهرة" },
            { name: "د. محمد علي", affiliation: "معهد التكنولوجيا" },
          ],
          year: 2024,
          topics: [topics[1].id, topics[2].id],
          pdf: media[1].id,
          doi: "10.1000/example.doi",
          status: "published",
          publishedAt: new Date().toISOString(),
        },
      }),
      payload.create({
        collection: "papers",
        data: {
          title: {
            ar: "الأمن السيبراني في عصر الذكاء الاصطناعي",
            en: "Cybersecurity in the Age of AI",
            fr: "Cybersécurité à l'Ère de l'IA",
          },
          slug: "cybersecurity-ai-age",
          abstract: {
            ar: "دراسة شاملة حول تحديات الأمن السيبراني في ظل انتشار تقنيات الذكاء الاصطناعي.",
            en: "A comprehensive study on cybersecurity challenges in the era of widespread AI technologies.",
            fr: "Une étude complète sur les défis de cybersécurité à l'ère des technologies IA répandues.",
          },
          authors: [{ name: "د. سارة محمود", affiliation: "جامعة الملك سعود" }],
          year: 2024,
          topics: [topics[3].id, topics[0].id],
          status: "published",
          publishedAt: new Date().toISOString(),
        },
      }),
    ]);

    console.log("✅ Papers created");

    console.log("🎉 Seed completed successfully!");
    console.log(`📊 Created:`);
    console.log(`   - ${topics.length} topics`);
    console.log(`   - ${media.length} media files`);
    console.log(`   - ${lessons.length} lessons`);
    console.log(`   - ${courses.length} courses`);
    console.log(`   - ${news.length} news articles`);
    console.log(`   - ${papers.length} research papers`);
  } catch (error) {
    console.error("❌ Seed failed:", error);
    throw error;
  } finally {
    process.exit(0);
  }
};

seed();
