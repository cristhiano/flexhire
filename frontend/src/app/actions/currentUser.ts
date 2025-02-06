"use client";

import { initRelayEnvironment } from "@/RelayEnvironment";
import { fetchQuery, graphql } from "react-relay";
import { currentUserQuery } from "@/__generated__/currentUserQuery.graphql";

export async function submitForm(formData: FormData) {
  // localStorage.setItem("apiKey", formData.get("apiKey") as string);

  const relayEnv = initRelayEnvironment();

  const query = graphql`
    query currentUserQuery {
      user {
        name
        avatarUrl
        applications {
          applications {
            nodes {
              client{
                name
              }
            }
          }
        }
        userSkills {
          skill {
            name
          }
        }
      }
    }
  `;

  const data = await fetchQuery<currentUserQuery>(relayEnv, query, {}).toPromise();

  return data;
}
