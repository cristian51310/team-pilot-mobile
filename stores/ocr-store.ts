import { create } from "zustand"

type StepsStore = {
  status: number,
  setStatus: (status: number) => void
}

export const APP_STATUS = {
  UPLOAD: 1,
  LOADING: 2,
  SUCCESS: 3,
  ERROR: -1
}

export const useStepsOCRStore = create<StepsStore>((set) => ({
  status: APP_STATUS.UPLOAD,
  setStatus: (status: number) => set({ status }),
}))

export function setAppStatusUpload() {
  useStepsOCRStore.getState().setStatus(APP_STATUS.UPLOAD)
}

export function setAppStatusLoading() {
  useStepsOCRStore.getState().setStatus(APP_STATUS.LOADING)
}

export function setAppStatusError() {
  useStepsOCRStore.getState().setStatus(APP_STATUS.ERROR)
}

export function setAppStatusSuccess() {
  useStepsOCRStore.getState().setStatus(APP_STATUS.SUCCESS)
}
