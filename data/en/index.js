import { profile } from './profile';
import { projects } from './projects';
import { experiences } from './experiences';
import { skills } from './skills';
import { academics } from './academics';
import { ui } from './ui';

export const en = {
    ...profile,
    ...ui,
    ...academics,
    skills,
    experiences,
    projects
};