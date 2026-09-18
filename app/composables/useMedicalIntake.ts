import type { MedicalChecklistSelection } from '~/constants/medical/intake'

export function useMedicalIntake() {
  const router = useRouter()

  function buildChecklist(payload: MedicalChecklistSelection) {
    if (!payload.caseType) {
      return { ok: false as const, error: 'Choose an injury or health context to see the relevant checklist.' }
    }
    if (!payload.timing) {
      return { ok: false as const, error: 'Choose when the injury or symptoms began.' }
    }
    if (!payload.worsening) {
      return { ok: false as const, error: 'Tell us whether symptoms are worsening, stable, or unclear.' }
    }

    router.push({
      path: '/medical/your-plan',
      query: {
        context: payload.caseType,
        timing: payload.timing,
        worsening: payload.worsening,
      },
    })
    return { ok: true as const }
  }

  return {
    buildChecklist,
  }
}
