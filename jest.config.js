module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        "@components/(.*)": "<rootDir>src/components/$1",
        "@store/(.*)": "<rootDir>src/store/$1",
        "@common/(.*)": "<rootDir>src/common/$1",
        "@pages/(.*)": "<rootDir>src/pages/$1",
        "@assets/(.*)":"<rootDir>src/assets/$1",
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}