import React from 'react';
import Layout from '@components/Layout';
import ProjectList from '@components/ProjectList';

const projects = [
  {
    title: 'University Courses Management System',
    description:
      'An IT university desires to develop a course management system. Courses have fixed capacities and students can only be enrolled in a limited number of courses if their capacity allows for it. The work is done in the Java language.',
  },
  {
    title: 'FSA-to-RegExp-Translator',
    description:
      'Implement an FSA to RegExp Translator. Given an FSA description in the input.txt your program should output to console an error description OR a regular expression that corresponds to the given FSA. The work is done in the Java language.',
  },
  {
    title: 'Shortest network paths',
    description:
      "The graph of a computer network where each edge has a length in meters and bandwidth. Implement a program using AdjacencyMatrixGraph to compute the shortest path from host (A) to host (B) with a requirement of minimum bandwidth (W). You need to use Dijkstra's algorithm to solve this.",
  },
];

const ProjectListPage: React.FC = () => {
  return (
    <Layout>
      <ProjectList projects={projects} />
    </Layout>
  );
};

export default ProjectListPage;
