function normalizeClasses(value: string): string[] {
    return [...new Set(value.trim().split(/\s+/).filter(Boolean))].sort();
}

function hasSameClasses(answer: string, solution: string): boolean {
    const answerClasses = normalizeClasses(answer);
    const solutionClasses = normalizeClasses(solution);

    return answerClasses.length === solutionClasses.length && answerClasses.every((item, index) => item === solutionClasses[index]);
}

export function validateChallenge(answer: string, solutions: string[]): boolean {
    return solutions.some((solution) => hasSameClasses(answer, solution));
}
