export interface User {
  id: string;
  isNewlyOnboarded: boolean;
  onboardingCompletedAt?: string;
}

// Check if user just completed onboarding
export const checkOnboardingStatus = async (): Promise<boolean> => {
  try {
    // Replace with actual API call
    // const response = await fetch(`${API_BASE_URL}/user/onboarding-status`);
    // const data = await response.json();
    // return data.isNewlyOnboarded;

    // Mock implementation - simulating a newly onboarded user
    // In real app, this would check if onboarding was completed within last few minutes
    return true; // Change to false to test without showing first sheet
  } catch (error) {
    console.error('Failed to check onboarding status:', error);
    return false;
  }
};

// Submit feedback to backend
export const submitFeedback = async (feedback: string): Promise<void> => {
  try {
    // Replace with actual API call
    // await fetch(`${API_BASE_URL}/feedback`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ feedback }),
    // });

    // Mock implementation - simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Feedback submitted:', feedback);
  } catch (error) {
    console.error('Failed to submit feedback:', error);
    throw error;
  }
};

// Mark that user has seen the review prompt (to show it after 2-3 days)
export const markReviewPromptShown = async (): Promise<void> => {
  try {
    // Replace with actual API call
    // await fetch(`${API_BASE_URL}/user/review-prompt`, {
    //   method: 'POST',
    // });

    console.log('Review prompt shown timestamp saved');
  } catch (error) {
    console.error('Failed to mark review prompt:', error);
  }
};
