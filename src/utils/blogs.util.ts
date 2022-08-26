import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'src', 'content');

export function getBlogsFiles()
{
    return fs.readdirSync(blogsDirectory);
}

export function getBlogData(blogIdentifier: string)
{
    const blogSlug = blogIdentifier.replace(/\.md$/, '');
    const filePath = path.join(blogsDirectory, `${ blogSlug }.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return { slug: blogSlug, ...data, content };
}

export function getAllBlogs()
{
    const blogFiles = getBlogsFiles();
    const allBlogs = blogFiles.map(blogFile => getBlogData(blogFile));

    return allBlogs.sort((blogA: any, blogB: any) => blogA.date > blogB.date ? -1 : 1);
}
